import { widgetHTML } from '../widgetHTML';
import {
    closeAskQuestionAndOpenConversationsPage,
    closeConversationAndOpenConversationsList,
    handleSendMessage,
    openAskQuestionPage,
    openConversationsPage,
    openMainPage,
    handleAskQuestion,
} from '../widget';

export const body = document.body;

export let widgetWrap;
export let chat;

export let askQuestionButton;

export let bottomPanelHomeButtons;
export let bottomPanelMessageButtons;

export let closeConversationAndOpenConversationsListButton;
export let closeAskQuestionAndOpenMessagesButton;

export let conversationsList;
export let conversationsBlock;

export let questionsList;

export let mainPage;
export let conversationPage;
export let askQuestionPage;
export let conversationsPage;

export let askQuestionMessagesList;
export let commonMessagesList;

export let askQuestionInput;
export let messageInput;
export let conversationInput;

export function initComponents() {
    body.innerHTML = widgetHTML;

    widgetWrap = document.getElementById('chat-widget__wrap');
    chat = widgetWrap?.querySelector('.chat');

    bottomPanelHomeButtons = widgetWrap?.querySelectorAll('.bottom-panel__home-button');
    bottomPanelHomeButtons?.forEach(el => el?.addEventListener('click', openMainPage));

    bottomPanelMessageButtons = widgetWrap?.querySelectorAll('.bottom-panel__messages-button');
    bottomPanelMessageButtons?.forEach(el => el?.addEventListener('click', openConversationsPage));

    askQuestionButton = widgetWrap?.querySelector('.ask-question');
    askQuestionButton?.addEventListener('click', openAskQuestionPage);

    closeConversationAndOpenConversationsListButton = widgetWrap?.querySelector('.close-conversation-and-open-conversation-list__button');
    closeConversationAndOpenConversationsListButton?.addEventListener('click', closeConversationAndOpenConversationsList);

    closeAskQuestionAndOpenMessagesButton = widgetWrap?.querySelector('.chat__ask-question-back');
    closeAskQuestionAndOpenMessagesButton?.addEventListener('click', closeAskQuestionAndOpenConversationsPage);

    conversationsBlock = widgetWrap?.querySelector('.chat__conversations-block');
    conversationsList = widgetWrap?.querySelector('.conversations-list');

    questionsList = widgetWrap?.querySelector('.chat__questions-list');

    mainPage = widgetWrap?.querySelector('.chat__main');
    conversationPage = widgetWrap?.querySelector('.chat__conversation');
    askQuestionPage = widgetWrap?.querySelector('.chat__ask-question');
    conversationsPage = widgetWrap?.querySelector('.chat__messages');

    askQuestionMessagesList = widgetWrap?.querySelector('#ask-question__messages-list');
    commonMessagesList = widgetWrap?.querySelector('#common-messages-list');

    askQuestionInput = widgetWrap?.querySelector('#ask-question__input');
    askQuestionInput?.addEventListener('keydown', handleAskQuestion);

    messageInput = widgetWrap?.querySelector('#message-input');
    messageInput?.addEventListener('keydown', e => handleSendMessage(e, commonMessagesList));

    conversationInput = widgetWrap?.querySelectorAll('.chat__conversation-input');
}
