import { rightArrow, unreadIcon } from './components/icons';
import { getLead, getSupportConversationsList, getSupportMessagesList, setEmail, createConversation, sendMessage } from './fetches';
import { getTime } from './utils';
import { enterEmailBlock } from './components/enterEmailBlock';
import { askQuestionFirstMessage } from './components/askQuestionFirstMessage';
import { closeEmojiPicker, createEmojiPicker } from './emojiPicker';
import { initChatVisibilityMethods } from './methods/chatVisibility';
import { clearConversationsData } from './methods/clearConversationsData';
import { initComponents } from './methods/initComponents';
import {
    conversationsList,
    commonMessagesList,
    conversationsPage,
    conversationPage,
    mainPage,
    askQuestionPage,
    askQuestionMessagesList,
    messageInput,
    askQuestionInput,
} from './methods/initComponents';
import connectWebSocket from './websocket';
import Cookie from 'js-cookie';
import { clearChatConversationInput } from './methods/clearChatConversationInput';
import { conversationsNotFound } from './components/conversationsNotFound';

///// VARIABLES /////
export const userAgent = navigator.userAgent;
export const ip = '127.0.0.1';
export const token = appConfig.token;

///// DATA /////
export let leadData = null;
export let currentConversationUUID = null;
export let messages = [];
export let conversations = [];
export let conversationsPages = {};
export let messagesPages = {};
export let currentConversationsPage = 1;
export let currentMessagesPage = 1;

export function renderConversationsList() {
    conversationsList.innerHTML = '';
    if (!conversations.length) {
        conversationsList.insertAdjacentHTML('beforeend', conversationsNotFound);
        const askQuestionLink = document.querySelector('.conversations-list__ask-question-link');
        askQuestionLink.addEventListener('click', openAskQuestionPage);
        return;
    }
    conversations.forEach(conversation => {
        const conversationItem = document.createElement('div');

        conversationItem.addEventListener('click', async () => {
            currentConversationUUID = conversation.uuid;
            void openConversationPage();
        });

        conversationItem.classList.add('conversation-list-item');
        conversationItem.innerHTML = `
            <div class="conversation-data">
                <p class="conversation-last-message">${conversation.last_message}</p>
                <p class="conversation-info">${conversation.subject} • ${conversation.last_message_at}</p>
            </div>
            ${conversation.is_read ? rightArrow : unreadIcon}
        `;
        conversationsList.appendChild(conversationItem);
    });

    // conversationsList.addEventListener('scroll', handleConversationsScroll);
}

const handleMessagesScroll = updateMessagesListOnScroll();

function renderMessagesList() {
    const messageClassMap = {
        user_message: 'user-message',
        admin_message: 'admin-message',
        divider: 'divider',
    };
    commonMessagesList.innerHTML = '';
    messages.forEach(message => {
        let messageTemplate = '';
        if (message.type === 'divider') {
            messageTemplate = `<div class="divider">${message.value}</div>`;
        } else {
            messageTemplate = `
                <div class="message__inner-wrap">
                    <div class="message ${messageClassMap[message.type]}">${message.message}</div>
                    <span class="message__time ${messageClassMap[message.type]}">${message.created_time}</span>
                </div>`;
        }
        commonMessagesList.insertAdjacentHTML('beforeend', messageTemplate);
    });
    commonMessagesList.addEventListener('scroll', handleMessagesScroll);
}

export function openMainPage() {
    conversationsPage.classList.add('is-hidden');
    mainPage.classList.remove('is-hidden');
}

export const handleConversationsScroll = updateConversationsListOnScroll();

export async function openConversationsPage() {
    mainPage.classList.add('is-hidden');
    conversationsPage.classList.remove('is-hidden');
    clearConversationsData();
    await getSupportConversationsList(currentConversationsPage);
    renderConversationsList();
    conversationsList.addEventListener('scroll', handleConversationsScroll);
}

export function updateConversationsListOnScroll() {
    let isPageLoading = false;

    return async function () {
        if (isPageLoading) return;
        if (conversationsList.clientHeight < 50) return;

        if (conversationsList.scrollTop + conversationsList.clientHeight >= conversationsList.scrollHeight - 50) {
            if (currentConversationsPage >= conversationsPages.page_quantity) {
                conversationsList.removeEventListener('scroll', handleConversationsScroll);
                return;
            }

            isPageLoading = true;
            conversationsList.insertAdjacentHTML('beforeend', '<div class="loader" style="margin-top: 24px;"/>');

            try {
                await getSupportConversationsList(++currentConversationsPage);
                renderConversationsList();
            } catch (e) {
                console.error(e);
            } finally {
                isPageLoading = false;
            }
        }
    };
}

export function updateMessagesListOnScroll() {
    let isPageLoading = false;

    return async function () {
        if (isPageLoading) return;
        if (commonMessagesList.clientHeight < 50) return;

        if (commonMessagesList.scrollTop < 50) {
            if (currentMessagesPage >= messagesPages.page_quantity) {
                commonMessagesList.removeEventListener('scroll', handleMessagesScroll);
                return;
            }
            isPageLoading = true;
            commonMessagesList.insertAdjacentHTML('afterbegin', '<div class="loader" style="margin-top: 24px;"/>');

            try {
                await getSupportMessagesList(++currentMessagesPage);
                renderMessagesList();
            } catch (e) {
                console.error(e);
            } finally {
                isPageLoading = false;
            }
        }
    };
}

export async function closeConversationAndOpenConversationsList() {
    clearChatConversationInput();
    closeEmojiPicker();
    currentMessagesPage = 1;
    clearConversationsData();
    conversationPage.classList.add('is-hidden');
    conversationsPage.classList.remove('is-hidden');
    await getSupportConversationsList();
    renderConversationsList();
    // conversationsList.addEventListener('scroll', handleConversationsScroll);
}

export async function closeAskQuestionAndOpenConversationsPage() {
    clearChatConversationInput();
    closeEmojiPicker();
    clearConversationsData();
    askQuestionPage.classList.add('is-hidden');
    conversationsPage.classList.remove('is-hidden');
    askQuestionMessagesList.innerHTML = '';
    await getSupportConversationsList();
    renderConversationsList();
}

// export async function closeConversationsPageAndOpenAskQuestion() {
//     clearConversationsData();
//     conversationsPage.classList.add('is-hidden');
//     askQuestionPage.classList.remove('is-hidden');
//     askQuestionMessagesList.innerHTML = '';
//     await getSupportConversationsList();
//     renderConversationsList();
// }

export function openAskQuestionPage() {
    clearConversationsData();
    askQuestionPage.classList.remove('is-hidden');
    mainPage.classList.add('is-hidden');
    conversationsPage.classList.add('is-hidden');
    askQuestionMessagesList.innerHTML = '';
    askQuestionMessagesList.insertAdjacentHTML('beforeend', askQuestionFirstMessage);
    currentConversationUUID = null;
}

// function closeAskQuestionPage() {
//     askQuestionPage.classList.add('is-hidden');
//     mainPage.classList.remove('is-hidden');
// }

async function openConversationPage() {
    conversationsList.addEventListener('scroll', handleConversationsScroll);
    conversationsPage.classList.add('is-hidden');
    conversationPage.classList.remove('is-hidden');
    currentMessagesPage = 1;
    commonMessagesList.innerHTML = '';
    messages = [];
    commonMessagesList.insertAdjacentHTML('beforeend', "<div class='loader'/>");
    await getSupportMessagesList(currentMessagesPage);
    renderMessagesList();
    commonMessagesList.scrollTop = commonMessagesList.scrollHeight;
}

// function closeConversationPage() {
//     conversationPage.classList.add('is-hidden');
//     mainPage.classList.remove('is-hidden');
// }

export function renderMessage({ message, type, created_time }, list) {
    const typeMap = {
        user_message: 'user-message',
        admin_message: 'admin-message',
    };
    const messageEl = `
        <div class="message__inner-wrap">
            <div class="message ${typeMap[type]}">${message}</div>
            <span class="message__time ${typeMap[type]}">${created_time}</span>
        </div>`;
    list.insertAdjacentHTML('beforeend', messageEl);
    list.scrollTop = list.scrollHeight;
}

export function handleAskQuestion(e) {
    if (!currentConversationUUID) {
        void handleCreateConversation(e);
    } else {
        void handleSendMessage(e, askQuestionMessagesList);
    }
}

export async function handleCreateConversation(e) {
    try {
        if (e.key === 'Enter') {
            const value = e.target.value;
            e.target.value = '';
            if (!value) return;
            closeEmojiPicker();
            const { conversation, message } = await createConversation({
                subject: value,
                message: value,
                files: [],
                user_agent: userAgent,
                ip,
                token,
            });
            currentConversationUUID = conversation.uuid;

            // renderMessage(message, askQuestionMessagesList);

            if (!window.appConfig.email) {
                const chatConversationInputWrap = document.querySelectorAll('.chat__conversation-input-wrap');
                chatConversationInputWrap.forEach(el => (el.style.visibility = 'hidden'));

                // Ввод email
                askQuestionMessagesList.insertAdjacentHTML('beforeend', enterEmailBlock);
                const enterEmailInput = document.getElementById('enter-email-input');
                const sendButton = document.querySelector('.input-block__send-button');

                sendButton.addEventListener('click', async () => {
                    const email = enterEmailInput.value;
                    if (!email) return;
                    const error = document.querySelector('.input-block__error');

                    try {
                        await setEmail({ user_agent: userAgent, ip, token, email });
                        window.appConfig.email = email;
                        enterEmailInput.setAttribute('disabled', 'true');
                        sendButton.style.display = 'none';
                        error.classList.add('is-hidden');

                        chatConversationInputWrap.forEach(el => (el.style.visibility = 'visible'));
                    } catch (e) {
                        error.textContent = e.response.data.message;
                        error.classList.remove('is-hidden');
                    }
                });
            }
        }
    } catch (e) {
        console.error(e);
    }
}

export async function handleSendMessage(e, list) {
    if (!currentConversationUUID) return;
    try {
        if (e.key === 'Enter') {
            const value = e.target.value;
            e.target.value = '';
            if (!value) return;
            closeEmojiPicker();
            const { message } = await sendMessage({ message: value, files: [] });

            // renderMessage(message, list);
        }
    } catch (e) {
        console.error(e);
    }
}

async function initWidget() {
    initComponents();
    initChatVisibilityMethods();
    connectWebSocket();
    createEmojiPicker();
    Cookie.set('token', window.appConfig.token);

    try {
        leadData = await getLead();
        console.log('leadData', leadData);
    } catch (e) {
        console.error(e);
    }
}

window.addEventListener('DOMContentLoaded', initWidget);
