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
import { initBottomPanel } from './initBottomPanel';

export const body = document.body;

export let widgetWrap;
export let chat;

export let askQuestionButton;

export let bottomPanelHomeButtons;
export let bottomPanelMessageButtons;

export let closeConversationAndOpenConversationsListButton;
export let closeAskQuestionAndOpenMessagesButton;

export let conversationsList;
export let askQuestionBlock;

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

    askQuestionBlock = widgetWrap?.querySelector('.chat__ask-question-block');
    conversationsPage = widgetWrap?.querySelector('.chat__messages');
    initBottomPanel();

    askQuestionButton = widgetWrap?.querySelector('.ask-question');
    askQuestionButton?.addEventListener('click', openAskQuestionPage);

    closeConversationAndOpenConversationsListButton = widgetWrap?.querySelector('.close-conversation-and-open-conversation-list__button');
    closeConversationAndOpenConversationsListButton?.addEventListener('click', closeConversationAndOpenConversationsList);

    closeAskQuestionAndOpenMessagesButton = widgetWrap?.querySelector('.chat__ask-question-back');
    closeAskQuestionAndOpenMessagesButton?.addEventListener('click', closeAskQuestionAndOpenConversationsPage);

    conversationsList = widgetWrap?.querySelector('.conversations-list');

    questionsList = widgetWrap?.querySelector('.chat__questions-list');

    mainPage = widgetWrap?.querySelector('.chat__main');
    conversationPage = widgetWrap?.querySelector('.chat__conversation');
    askQuestionPage = widgetWrap?.querySelector('.chat__ask-question');

    askQuestionMessagesList = widgetWrap?.querySelector('#ask-question__messages-list');
    commonMessagesList = widgetWrap?.querySelector('#common-messages-list');

    askQuestionInput = widgetWrap?.querySelector('#ask-question__input');
    askQuestionInput?.addEventListener('keydown', handleAskQuestion);

    messageInput = widgetWrap?.querySelector('#message-input');
    messageInput?.addEventListener('keydown', e => handleSendMessage(e, commonMessagesList));

    conversationInput = widgetWrap?.querySelectorAll('.chat__conversation-input');
}
