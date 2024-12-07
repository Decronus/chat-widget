import axios from 'axios';
import { baseURL, support } from './endpoints.js';
import { currentConversationUUID, messages, conversations, conversationsPages, messagesPages, leadData } from './widget';
import { userAgent, ip, token } from './widget';

const instance = axios.create({
    baseURL,
    withCredentials: true,
});

export async function getLead() {
    try {
        const body = { user_agent: userAgent, ip, token: window.appConfig.token, get_params: {} };
        const { data } = await instance.post(support.getLead, body);
        leadData = data.payloads.data;
        return data.payloads.data;
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

export async function getSupportMessagesList(page) {
    try {
        const { data } = await instance.get(
            support.messageList({
                token: appConfig.token,
                conversation_uuid: currentConversationUUID,
                page,
                row_per_page: 20,
            })
        );
        messages.unshift(...data.payloads.data);
        messagesPages = data.payloads.pages;
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

export async function createConversation({ subject, message, files }) {
    try {
        const body = { subject, message, files, user_agent: userAgent, ip, token: window.appConfig.token };
        const { data } = await instance.post(support.conversationNew, body);
        return data.payloads;
    } catch (e) {
        console.log('e', e);
    }
}

export async function sendMessage({ message, files }) {
    try {
        const body = {
            message,
            files,
            user_agent: userAgent,
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
