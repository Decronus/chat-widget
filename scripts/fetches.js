import axios from 'axios';
import { baseURL, support } from './endpoints.js';

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

export async function getSupportConversationList() {
    try {
        const { data } = await instance.get(support.conversationList({ token: appConfig.token, page: 1 }));
        return data.payloads;
    } catch (e) {
        console.error('e', e);
    }
}

export async function getSupportMessageList(uuid) {
    try {
        const { data } = await instance.get(
            support.messageList({
                token: appConfig.token,
                conversation_uuid: uuid,
                page: 1,
                row_per_page: 10,
            })
        );
        return data.payloads;
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
        console.log('e', e);
    }
}

export async function createConversation({ subject, message, user_agent, ip, files, token }) {
    try {
        const body = { subject, message, user_agent, ip, files, token };
        const { payloads } = await instance.post(support.conversationNew, body);
        return payloads;
    } catch (e) {
        console.log('e', e);
    }
}
