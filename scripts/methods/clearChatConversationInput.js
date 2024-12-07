import { conversationInput } from './initComponents';

export function clearChatConversationInput() {
    conversationInput.forEach(el => (el.value = ''));
}
