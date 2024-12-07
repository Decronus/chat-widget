import { currentConversationsPage, conversations, conversationsPages, handleConversationsScroll } from '../widget.js';
import { conversationsList } from './initComponents.js';

export function clearConversationsData() {
    conversationsList.removeEventListener('scroll', handleConversationsScroll);
    conversationsList.innerHTML = '';
    currentConversationsPage = 1;
    conversations = [];
    conversationsPages = {};
    conversationsList.insertAdjacentHTML('beforeend', "<div class='loader' style='margin-top: 24px'/>");
}
