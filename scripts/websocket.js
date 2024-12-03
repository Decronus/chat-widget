import { currentConversationUUID, messages, conversations } from './widget';

export default function connectWebsocket() {
    const socket = new WebSocket(`wss://panel.makeyourpanel.com/ws/users/support_chat?token=${window.appConfig.token}`);

    // Событие при подключении
    socket.onopen = () => {
        console.log('WebSocket is connected');
        // socket.send('Привет сервер!');
    };

    // Событие при получении сообщения
    socket.onmessage = event => {
        const data = JSON.parse(event.data);
        console.log('data', data);
        handleWebsocketMessage(data);
    };

    // Событие при ошибке
    socket.onerror = error => {
        console.error('Ошибка WebSocket:', error);
    };

    // Событие при закрытии соединения
    socket.onclose = () => {
        console.log('Соединение WebSocket закрыто');
        setTimeout(connectWebsocket, 3000);
    };

    function handleWebsocketMessage(data) {
        const handlers = {
            'new message': handleNewMessage,
            'create conversation': handleCreateConversation,
            'edit conversation': handleEditConversation,
            'delete message': handleDeleteMessage,
        };

        const handler = handlers[data.type];
        if (handler) {
            handler(data.payload);
        } else {
            console.warn('Unhandled WebSocket message type:', data.type);
        }
    }

    function updateConversation(conversation) {
        if (!conversations) return;
        const index = conversations.findIndex(el => el.uuid === conversation.uuid);
        if (index === -1) return;
        conversations.splice(index, 1, conversation);
    }

    function handleNewMessage({ message, conversation }) {
        updateConversation(conversation);

        if (conversation.uuid !== currentConversationUUID) return;
        if (messages) messages.push(message);
    }

    function handleCreateConversation({ conversation }) {
        if (conversations) conversations.unshift(conversation);
    }

    function handleEditConversation({ conversation }) {
        updateConversation(conversation);
    }

    function handleDeleteMessage({ delete_message, message, conversation }) {
        updateConversation(conversation);

        if (conversation.uuid !== currentConversationUUID) return;
        if (messages) {
            const index = messages.data.findIndex(el => el.id === delete_message.id);
            if (index === -1) return;
            messages.data.splice(index, 1, message);
        }
    }
}
