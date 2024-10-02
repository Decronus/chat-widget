const widgetHTMLEndpoint = 'https://cdn.jsdelivr.net/gh/Decronus/chat-widget@main/widget.html';

const body = document.body;

let widgetWrap;
let chat;

let showChatButton;
let closeChatButton;
let askQuestionButton;

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

async function initWidget() {
    // async function loadWidgetHTML() {
    //     const response = await fetch(widgetHTMLEndpoint);
    //     const widgetHtml = await response.text();
    //     body.innerHTML = widgetHtml;
    //     console.log(widgetHtml);
    // }
    //
    // await loadWidgetHTML();

    widgetWrap = document.getElementById('chat-widget__wrap');
    chat = widgetWrap?.querySelector('.chat');
    showChatButton = widgetWrap?.querySelector('.show-chat-button');
    closeChatButton = widgetWrap?.querySelector('.close-chat-button');
    askQuestionButton = widgetWrap?.querySelector('.ask-question');
}

initWidget();




