import { widgetWrap, chat } from './initComponents';

let showChatButton;
let closeChatButton;

async function showChat() {
    chat.classList.remove('is-hidden');
    if (showChatButton) showChatButton.style.display = 'none';
    if (closeChatButton) closeChatButton.style.display = 'flex';
}

function closeChat() {
    chat.classList.add('is-hidden');
    if (showChatButton) showChatButton.style.display = 'flex';
    if (closeChatButton) closeChatButton.style.display = 'none';
}

export function initChatVisibilityMethods() {
    showChatButton = widgetWrap?.querySelector('.show-chat-button');
    console.log('showChatButton', showChatButton);
    showChatButton.addEventListener('click', showChat);

    closeChatButton = widgetWrap?.querySelector('.close-chat-button');
    closeChatButton.addEventListener('click', closeChat);
}
