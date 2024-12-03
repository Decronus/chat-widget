import axios from 'axios';
import { baseURL, support } from './endpoints.js';
import { currentConversationUUID, messages, conversations, conversationsPages } from './widget';

const instance = axios.create({
    baseURL,
});

export async function getLead({ user_agent, ip, token, get_params }) {
    try {
        const body = { user_agent, ip, token, get_params };
        const { payloads } = await instance.post(support.getLead, body);
        return payloads;
    } catch (e) {
        console.error('e', e);
    }
}

export async function getSupportConversationsList(page) {
    try {
        const { data } = await instance.get(support.conversationList({ token: appConfig.token, page: page || 1 }));
        conversations.push(...data.payloads.data);
        conversationsPages = data.payloads.pages;
        return conversations;
    } catch (e) {
        console.error('e', e);
    }
}

export async function getSupportMessagesList(uuid) {
    try {
        currentConversationUUID = uuid;
        const { data } = await instance.get(
            support.messageList({
                token: appConfig.token,
                conversation_uuid: uuid,
                page: 1,
                row_per_page: 20,
            })
        );
        messages.push(...data.payloads.data);
        return messages;
    } catch (e) {
        console.log('e', e);
    }
}

export async function setEmail({ user_agent, ip, token, email }) {
    try {
        const body = { user_agent, ip, token, email };
        const { payloads } = await instance.post(support.messageSetEmail, body);
        return payloads;
    } catch (e) {
        throw e;
    }
}

export async function createConversation({ subject, message, user_agent, ip, files, token }) {
    try {
        const body = { subject, message, user_agent, ip, files, token };
        const { data } = await instance.post(support.conversationNew, body);
        return data.payloads;
    } catch (e) {
        console.log('e', e);
    }
}

export async function sendMessage({ message, files, user_agent, ip }) {
    try {
        const body = {
            message,
            files,
            user_agent,
            ip,
            token: appConfig.token,
            conversation_uuid: currentConversationUUID,
        };
        const { data } = await instance.post(support.messageNew, body);
        return data.payloads;
    } catch (e) {
        console.log('e', e);
    }
}
