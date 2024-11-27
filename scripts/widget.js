import { rightArrow, unreadIcon } from './components/icons';
import { widgetHTML } from './widgetHTML';
import { getLead, getSupportConversationList, getSupportMessageList, setEmail, createConversation } from './fetches';
import { getTime } from './utils';
import { robotAvatar } from './components/robotAvatar';

const userAgent = navigator.userAgent;
const ip = '127.0.0.1';
const token = appConfig.token;

// void getLead({ user_agent: userAgent, ip, token, get_params: {} });
// void setEmail({ user_agent: userAgent, ip, token, email: 'zick3333@mail.ru' });

///// DATA /////
let currentConversationUUID = null;

///// MAIN /////
const body = document.body;

let widgetWrap;
let chat;

let showChatButton;
let closeChatButton;
let askQuestionButton;

let bottomPanelHomeButtons;
let bottomPanelMessageButtons;

let closeConversationAndOpenConversationListButton;
let closeAskQuestionAndOpenMessagesButton;

let conversationsList;
let conversationsBlock;

let questionsList;

let mainPage;
let conversationPage;
let askQuestionPage;
let messagesPage;

let askQuestionMessagesList;
let messagesList;
let askQuestionInput;
let messageInput;

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

async function renderConversationsList() {
    const { data } = await getSupportConversationList();
    conversationsList.innerHTML = '';
    data.forEach(conversation => {
        const conversationItem = document.createElement('div');
        conversationItem.addEventListener('click', () => {
            openConversationPage();
            renderMessagesList(conversation.uuid);
        });
        conversationItem.classList.add('conversation-list-item');
        conversationItem.innerHTML = `
            <div class="conversation-data">
                <p class="conversation-last-message">${conversation.last_message}</p>
                <p class="conversation-info">${conversation.subject} • ${getTime(conversation.last_message_at_timestamp)}</p>
            </div>
            ${conversation.is_read ? rightArrow : unreadIcon}
        `;
        conversationsList.appendChild(conversationItem);
    });
}

// function renderQuestionsList() {
//     questionsListData.forEach(question => {
//         const questionItem = document.createElement('div');
//         questionItem.classList.add('chat__questions-list-item');
//         questionItem.innerHTML = `
//             <p class="chat__conversations-last-message">${question.question}</p>
//             ${rightArrow}`;
//         questionsList.appendChild(questionItem);
//     });
// }

async function renderMessagesList(uuid) {
    const { data } = await getSupportMessageList(uuid);
    data.forEach((message, index) => {
        const messageItem = document.createElement('div');
        if (message.type === 'divider') {
            messageItem.classList.add('divider');
            messageItem.innerHTML = message.value;
        } else if (message.type === 'user_message') {
            messageItem.classList.add('message', 'user-message');
            messageItem.innerHTML = message.message;
        } else if (message.type === 'admin_message') {
            messageItem.classList.add('message', 'admin-message');
            messageItem.innerHTML = message.message;
        }
        messagesList.appendChild(messageItem);
    });
}

function openMainPage() {
    messagesPage.classList.add('is-hidden');
    mainPage.classList.remove('is-hidden');
}

function openMessagesPage() {
    mainPage.classList.add('is-hidden');
    messagesPage.classList.remove('is-hidden');
}

function closeConversationAndOpenConversationList() {
    messagesList.innerHTML = '';
    conversationPage.classList.add('is-hidden');
    messagesPage.classList.remove('is-hidden');
    void renderConversationsList();
}

function closeAskQuestionAndOpenMessagePage() {
    askQuestionPage.classList.add('is-hidden');
    messagesPage.classList.remove('is-hidden');
    void renderConversationsList();
}

function openAskQuestionPage() {
    askQuestionPage.classList.remove('is-hidden');
    mainPage.classList.add('is-hidden');
}

function closeAskQuestionPage() {
    askQuestionPage.classList.add('is-hidden');
    mainPage.classList.remove('is-hidden');
}

function openConversationPage() {
    messagesPage.classList.add('is-hidden');
    conversationPage.classList.remove('is-hidden');
}

function closeConversationPage() {
    conversationPage.classList.add('is-hidden');
    mainPage.classList.remove('is-hidden');
}

async function handleCreateConversation(e) {
    try {
        if (e.key === 'Enter') {
            const value = askQuestionInput.value;
            if (!value) return;
            await createConversation({ subject: value, message: value, files: [], user_agent: userAgent, ip, token });
            askQuestionInput.value = '';
            const messagesList = document.querySelector('.messages-list');
            const messageItem = document.createElement('div');
            messageItem.classList.add('message', 'user-message');
            messageItem.innerHTML = value;
            messagesList.appendChild(messageItem);
        }
    } catch (e) {
        console.error(e);
    }
}

async function handleSendMessage(e) {
    try {
        if (e.key === 'Enter') {
            const value = messageInput.value;
            if (!value) return;
            await createConversation({ subject: value, message: value, files: [], user_agent: userAgent, ip, token });
            messageInput.value = '';
        }
    } catch (e) {
        console.error(e);
    }
}

function initWidget() {
    body.innerHTML = widgetHTML;

    widgetWrap = document.getElementById('chat-widget__wrap');
    chat = widgetWrap?.querySelector('.chat');

    showChatButton = widgetWrap?.querySelector('.show-chat-button');
    showChatButton.addEventListener('click', showChat);

    closeChatButton = widgetWrap?.querySelector('.close-chat-button');
    closeChatButton.addEventListener('click', closeChat);

    bottomPanelHomeButtons = widgetWrap?.querySelectorAll('.bottom-panel__home-button');
    bottomPanelHomeButtons?.forEach(el => el?.addEventListener('click', openMainPage));

    bottomPanelMessageButtons = widgetWrap?.querySelectorAll('.bottom-panel__messages-button');
    bottomPanelMessageButtons?.forEach(el => el?.addEventListener('click', openMessagesPage));

    askQuestionButton = widgetWrap?.querySelector('.ask-question');
    askQuestionButton?.addEventListener('click', openAskQuestionPage);

    closeConversationAndOpenConversationListButton = widgetWrap?.querySelector('.close-conversation-and-open-conversation-list__button');
    closeConversationAndOpenConversationListButton?.addEventListener('click', closeConversationAndOpenConversationList);

    closeAskQuestionAndOpenMessagesButton = widgetWrap?.querySelector('.chat__ask-question-back');
    closeAskQuestionAndOpenMessagesButton?.addEventListener('click', closeAskQuestionAndOpenMessagePage);

    conversationsBlock = widgetWrap?.querySelector('.chat__conversations-block');
    conversationsList = widgetWrap?.querySelector('.conversations-list');

    questionsList = widgetWrap?.querySelector('.chat__questions-list');

    mainPage = widgetWrap?.querySelector('.chat__main');
    conversationPage = widgetWrap?.querySelector('.chat__conversation');
    askQuestionPage = widgetWrap?.querySelector('.chat__ask-question');
    messagesPage = widgetWrap?.querySelector('.chat__messages');

    askQuestionMessagesList = widgetWrap?.querySelector('#ask-question__messages-list');
    messagesList = widgetWrap?.querySelector('#common-messages-list');

    askQuestionInput = widgetWrap?.querySelector('#ask-question__input');
    askQuestionInput?.addEventListener('keydown', handleCreateConversation);

    messageInput = widgetWrap?.querySelector('#message-input');
    messageInput?.addEventListener('keydown', handleCreateConversation);
}

window.addEventListener('DOMContentLoaded', () => {
    initWidget();
    void renderConversationsList();
    // renderQuestionsList();
    // void renderMessagesList();
});
