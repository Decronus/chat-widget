import axios from 'axios';
import { baseURL, support } from './endpoints.js';

export let token = 'e4s0uegkzk4vzk05dz3xnck861gjp3rz3y2i8iqk1kyk16it5u4z9c2e92daeb0yn84wprvsdyib4os4ubfyloctesn35387vif75mayz80wmh6u8jihlf7goikka1j2';

const instance = axios.create({
    baseURL,
});

export async function getSupportConversationList() {
    try {
        const { payloads } = await instance.get(support.conversationList({ token, page: 1 }));
        return payloads;
    } catch (e) {
        console.error('e', e);
    }
}

export async function getSupportMessageList() {
    try {
        const { payloads } = await instance.get(
            support.messageList({
                token,
                conversation_uuid: 'asdf',
                page: 1,
                row_per_page: 10,
            })
        );
        return payloads;
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
