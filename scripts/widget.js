import {getSupportConversationList} from "/scripts/fetches.js";
import {rightArrow, unreadIcon} from "/scripts/components.js";

const conversationsListData = [
    {
        id: 1,
        lastMessage: 'Hi there. I’m Bothrs Assistant. How can i...',
        author: 'Customer service',
        lastMessageTime: '2h ago',
        isUnread: false,
    },
    {
        id: 2,
        lastMessage: 'Is there anything specific you’re looking...',
        author: 'Customer service',
        lastMessageTime: '2h ago',
        isUnread: false,
    },
    {
        id: 3,
        lastMessage: 'Hi 👋 Anything I can help with?',
        author: 'Customer service',
        lastMessageTime: '2h ago',
        isUnread: true,
    }
]

const body = document.body;

let widgetWrap;
let chat;

let showChatButton;
let closeChatButton;
let askQuestionButton;

let conversationsList;

async function showChat() {
    chat.classList.remove('is-hidden');
    if (showChatButton) showChatButton.style.display = 'none';
    if (closeChatButton) closeChatButton.style.display = 'flex';
    await getSupportConversationList()
}

function closeChat() {
    chat.classList.add('is-hidden');
    if (showChatButton) showChatButton.style.display = 'flex';
    if (closeChatButton) closeChatButton.style.display = 'none';
}

function initConversationsList() {
    conversationsListData.forEach(conversation => {
        const conversationItem = document.createElement('div');
        conversationItem.classList.add('chat__conversations-list-item');
        conversationItem.innerHTML = `
            <div class="chat__conversations-data">
                <p class="chat__conversations-last-message">${conversation.lastMessage}</p>
                <p class="chat__conversations-info">${conversation.author} • ${conversation.lastMessageTime}</p>
            </div>
            ${conversation.isUnread ? unreadIcon : rightArrow}
        `;
        conversationsList.appendChild(conversationItem);
    })
}


async function initWidget() {
    async function loadWidgetHTML() {
        const response = await fetch(widgetHTMLEndpoint);
        const widgetHtml = await response.text();
        body.innerHTML = widgetHtml;
        console.log(widgetHtml);
    }

    await loadWidgetHTML();

    widgetWrap = document.getElementById('chat-widget__wrap');
    chat = widgetWrap?.querySelector('.chat');
    conversationsList = widgetWrap?.querySelector('.chat__conversations-list');

    showChatButton = widgetWrap?.querySelector('.show-chat-button');
    closeChatButton = widgetWrap?.querySelector('.close-chat-button');
    askQuestionButton = widgetWrap?.querySelector('.ask-question');


    showChatButton.addEventListener('click', showChat);
    closeChatButton.addEventListener('click', closeChat);
}

void initWidget()
initConversationsList();







