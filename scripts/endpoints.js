let panelDomain = 'panel.makeyourpanel.com';
export const baseURL = `https://usersapi.makeyourpanel.com/usersapi/${panelDomain}/v1/`;

export const support = {
    getLead: '/support/lead/get',
    conversationList: ({ token, page }) => {
        const query = new URLSearchParams({ token, page }).toString();
        return `/support/conversation/list/?${query}`;
    },
    messageList: ({ token, conversation_uuid, page, row_per_page }) => {
        const query = new URLSearchParams({
            token,
            conversation_uuid,
            page,
            row_per_page,
        }).toString();
        return `/support/message/list/?${query}`;
    },
    messageNew: `/support/message/new`,
    conversationNew: `/support/conversation/new`,
    messageSetEmail: `/support/message/set_email/`,
};
