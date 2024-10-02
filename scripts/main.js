const body = document.body;
const widgetWrap = document.getElementById('chat-widget__wrap');
const chat = widgetWrap.querySelector('.chat');
const showChatButton = widgetWrap.querySelector('.show-chat-button');
const closeChatButton = widgetWrap.querySelector('.close-chat-button');

function showChat() {
    chat.classList.remove('is-hidden');
    if (showChatButton) showChatButton.style.display = 'none';
    if (closeChatButton) closeChatButton.style.display = 'flex';
}

function closeChat() {
    chat.classList.add('is-hidden');
    if (showChatButton) showChatButton.style.display = 'flex';
    if (closeChatButton) closeChatButton.style.display = 'none';
}
