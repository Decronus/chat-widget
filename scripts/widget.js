///// COMPONENTS /////
const rightArrow = `
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00385 3.41141C7.7492 3.15677 7.31719 3.13924 7.03892 3.37227C6.76065 3.6053 6.7415 4.00064 6.99615 4.25529L11.3058 8.56492C12.3687 9.62783 12.3687 11.3722 11.3058 12.4351L6.99615 16.7447C6.7415 16.9994 6.76065 17.3947 7.03892 17.6278C7.31719 17.8608 7.7492 17.8433 8.00385 17.5886L12.3135 13.279C13.8541 11.7384 13.8541 9.26163 12.3135 7.72105L8.00385 3.41141Z" fill="#5C59E8"/>
    </svg>`

function leftArrow(onclick = undefined) {
    return `
    <svg style="transform: rotate(180deg)" onclick="${onclick}"  width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00385 3.41141C7.7492 3.15677 7.31719 3.13924 7.03892 3.37227C6.76065 3.6053 6.7415 4.00064 6.99615 4.25529L11.3058 8.56492C12.3687 9.62783 12.3687 11.3722 11.3058 12.4351L6.99615 16.7447C6.7415 16.9994 6.76065 17.3947 7.03892 17.6278C7.31719 17.8608 7.7492 17.8433 8.00385 17.5886L12.3135 13.279C13.8541 11.7384 13.8541 9.26163 12.3135 7.72105L8.00385 3.41141Z" fill="#5C59E8"/>
    </svg>`
}

function leftArrow2(onclick = undefined) {
    return `
    <svg onclick="${onclick}" width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.304688 8.25L0.902344 7.65234L7.65234 0.902344L8.25 0.304688L9.41016 1.5L8.84766 2.09766L2.66016 8.25L8.84766 14.4023L9.44531 15L8.25 16.1953L7.65234 15.5977L0.902344 8.84766L0.304688 8.25Z" fill="#F8F8F8"/>
    </svg>`
}

const unreadIcon = `
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10.5001" r="4" fill="#D80027"/>
    </svg>`

const searchIcon = `
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.375 6.4375C11.375 7.69531 10.9648 8.87109 10.2812 9.80078L13.7266 13.2734C14.082 13.6016 14.082 14.1758 13.7266 14.5039C13.3984 14.8594 12.8242 14.8594 12.4961 14.5039L9.02344 11.0312C8.09375 11.7422 6.91797 12.125 5.6875 12.125C2.54297 12.125 0 9.58203 0 6.4375C0 3.32031 2.54297 0.75 5.6875 0.75C8.80469 0.75 11.375 3.32031 11.375 6.4375ZM5.6875 10.375C7.08203 10.375 8.36719 9.63672 9.07812 8.40625C9.78906 7.20312 9.78906 5.69922 9.07812 4.46875C8.36719 3.26562 7.08203 2.5 5.6875 2.5C4.26562 2.5 2.98047 3.26562 2.26953 4.46875C1.55859 5.69922 1.55859 7.20312 2.26953 8.40625C2.98047 9.63672 4.26562 10.375 5.6875 10.375Z" fill="#3047EC"/>
    </svg>`

///// ENDPOINTS /////
const supportAPI = {
    conversationList: '/support/conversation/list',
    messageList: '/support/message/list',
    messageSetEmail: 'support/message/set_email',
}

///// HTML /////
const widgetHTML = `
    <div id="chat-widget__wrap">
    <div class="chat-widget">
        <div class="chat">
        
            <div class="chat__main">
                <!--Chat header-->
                <div class="chat__header">
                    <div>
                        <div class="chat__header-title">
                            <h1>Hi Aleksander 👋</h1>
                        </div>
                        <h1>How can we help?</h1>
                    </div>
                </div>
                <div class="chat__header-overlay"></div>
                <!---->
    
                <!--Chat body-->
                <div class="chat__body">
                    <div class="chat__body-overlay"></div>
    
                    <div class="chat__conversations-block">
                        <div class="chat__conversations-list"></div>
                        
                        <div class="button ask-question" onclick="openQuestionBlock()">
                            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.90534 25C8.80667 25 8.70736 24.9787 8.61541 24.936C8.39245 24.8312 8.25085 24.616 8.24925 24.3796L8.2233 20.303H8.04967C5.54098 20.303 3.5 18.3618 3.5 15.9752V7.32833C3.5 4.94171 5.54098 3 8.04967 3H20.9503C23.459 3 25.5 4.94171 25.5 7.32833V15.9752C25.5 18.3618 23.459 20.303 20.9503 20.303H15.6273L9.30225 24.8726C9.18597 24.9567 9.04597 25 8.90534 25ZM8.04967 4.24816C6.26466 4.24816 4.81217 5.62979 4.81217 7.32833V15.9752C4.81217 17.6732 6.26466 19.0548 8.04967 19.0548H8.87554C9.23626 19.0548 9.52939 19.3321 9.53163 19.6752L9.55341 23.1241L15.0094 19.1822C15.1237 19.0993 15.2631 19.0548 15.4063 19.0548H20.9503C22.7353 19.0548 24.1878 17.6732 24.1878 15.9752V7.32833C24.1878 5.62979 22.7353 4.24816 20.9503 4.24816H8.04967ZM15.1442 14.3907L15.1481 12.9201C15.8397 12.7982 16.4769 12.4819 16.9866 11.9998C17.6539 11.3678 18.0226 10.5267 18.0249 9.63084C18.029 7.78237 16.4516 6.27459 14.508 6.27032C14.5054 6.27032 14.5032 6.27032 14.501 6.27032C12.5609 6.27032 10.9799 7.76957 10.9751 9.6156C10.9742 9.95994 11.2673 10.2403 11.6296 10.2409H11.6312C11.9929 10.2409 12.2864 9.96238 12.2873 9.61804C12.2902 8.45947 13.2827 7.51848 14.5006 7.51848C14.5006 7.51848 14.5035 7.51848 14.5051 7.51848C15.725 7.52152 16.7152 8.468 16.7127 9.6284C16.7114 10.1903 16.4798 10.7187 16.0608 11.1149C15.643 11.5104 15.0891 11.728 14.5003 11.728C14.4984 11.728 14.4962 11.7274 14.4933 11.728C14.32 11.728 14.1534 11.7932 14.0304 11.9096C13.907 12.0266 13.8375 12.1851 13.8372 12.3508L13.8321 14.3882C13.8311 14.7326 14.1242 15.0129 14.4865 15.0135H14.4881C14.8498 15.0135 15.1433 14.735 15.1442 14.3907ZM14.4852 15.5231C14.0263 15.522 13.6535 15.875 13.6524 16.3115C13.6513 16.748 14.0224 17.1026 14.4812 17.1037C14.9401 17.1047 15.3129 16.7517 15.314 16.3153C15.3151 15.8788 14.944 15.5241 14.4852 15.5231Z"
                                      fill="white"/>
                            </svg>
                            Ask a question
                        </div>
                    </div>
                    
                    <div class="chat__questions-block is-hidden">
                        <div class="chat__questions-header">
                            <div class="chat__questions-header-title">
                                <img src="./images/questions-header-photos.png" width="46"/>
                                <h3>Ask a question</h3>
                            </div>
                            
                            ${leftArrow('closeQuestionBlock()')}
                        </div>
                        <div class="chat__questions-content">
                            <div class="chat__questions-input-wrap">
                                <input class="chat__questions-input" type="text" placeholder="Enter a question or keyword"/>
                                <div class="chat__questions-search-icon">
                                    ${searchIcon}
                                </div>
                            </div>
                            
                             <div class="chat__questions-list"></div>
                        </div>
                    </div>
                </div>
            <!---->
            </div>
            
            <div class="chat__conversation is-hidden">
                <div class="chat__conversation-header">
                    ${leftArrow2('closeConversation()')}
                </div>
            </div>
        </div>

        <!--Кнопки открытия и закрытия чата-->
        <div class="rounded-button show-chat-button" onclick="showChat()">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.0625 11.25C9.0625 10.7322 9.48223 10.3125 10 10.3125H18.75C19.2678 10.3125 19.6875 10.7322 19.6875 11.25C19.6875 11.7678 19.2678 12.1875 18.75 12.1875H10C9.48223 12.1875 9.0625 11.7678 9.0625 11.25Z"
                      fill="white"/>
                <path d="M10 15.3125C9.48223 15.3125 9.0625 15.7322 9.0625 16.25C9.0625 16.7678 9.48223 17.1875 10 17.1875H20C20.5178 17.1875 20.9375 16.7678 20.9375 16.25C20.9375 15.7322 20.5178 15.3125 20 15.3125H10Z"
                      fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M2.8125 10C2.8125 6.72081 5.47081 4.0625 8.75 4.0625H21.25C24.5292 4.0625 27.1875 6.72081 27.1875 10V17.957C27.1875 20.9838 24.7338 23.4375 21.707 23.4375C20.8336 23.4375 19.99 23.7545 19.3327 24.3296L17.2636 26.1401C15.9676 27.2741 14.0324 27.2741 12.7364 26.1401L10.6673 24.3296C10.01 23.7545 9.16637 23.4375 8.29303 23.4375C5.26621 23.4375 2.8125 20.9838 2.8125 17.957V10ZM8.75 5.9375C6.50634 5.9375 4.6875 7.75634 4.6875 10V17.957C4.6875 19.9483 6.30175 21.5625 8.29303 21.5625C9.62054 21.5625 10.9029 22.0443 11.902 22.9185L13.9711 24.729C14.5602 25.2444 15.4398 25.2444 16.0289 24.729L18.098 22.9185C19.0971 22.0443 20.3795 21.5625 21.707 21.5625C23.6983 21.5625 25.3125 19.9483 25.3125 17.957V10C25.3125 7.75634 23.4937 5.9375 21.25 5.9375H8.75Z"
                      fill="white"/>
            </svg>
        </div>
        <div class="rounded-button close-chat-button" onclick="closeChat()">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6329 12.0058C26.0149 11.6238 26.0412 10.9758 25.6916 10.5584C25.3421 10.141 24.7491 10.1123 24.3671 10.4942L17.9026 16.9587C16.3083 18.5531 13.6918 18.5531 12.0974 16.9587L5.63291 10.4942C5.25094 10.1123 4.65793 10.141 4.30839 10.5584C3.95884 10.9758 3.98513 11.6238 4.3671 12.0058L10.8316 18.4702C13.1425 20.7811 16.8576 20.7811 19.1685 18.4702L25.6329 12.0058Z"
                      fill="white"/>
            </svg>
        </div>
        <!---->
    </div>
</div>
`

///// MOCK DATA /////
const conversationsListData = [
    {
        id: 1,
        lastMessage: 'Hi there. I’m Bothrs Assistant. How can i...',
        author: 'Customer service',
        lastMessageTime: '2h ago',
        isUnread: false,
    },
    {
        id: 2,
        lastMessage: 'Is there anything specific you’re looking...',
        author: 'Customer service',
        lastMessageTime: '2h ago',
        isUnread: false,
    },
    {
        id: 3,
        lastMessage: 'Hi 👋 Anything I can help with?',
        author: 'Customer service',
        lastMessageTime: '2h ago',
        isUnread: true,
    }
]

const questionsListData = [
    {
        id: 1,
        question: 'Pricing',
    },
    {
        id: 2,
        question: 'News explained',
    },
    {
        id: 3,
        question: 'Promotion result timeline',
    },
    {
        id: 4,
        question: 'Supported platforms',
    },
    {
        id: 5,
        question: 'Required starting data',
    },
    {
        id: 6,
        question: 'How the service works',
    },
]

///// MAIN /////
const body = document.body;

let widgetWrap;
let chat;

let showChatButton;
let closeChatButton;
let askQuestionButton;

let conversationsList;
let conversationsBlock;
let questionsBlock;
let questionsList;

let mainPage
let conversationPage;

async function showChat() {
    chat.classList.remove('is-hidden');
    if (showChatButton) showChatButton.style.display = 'none';
    if (closeChatButton) closeChatButton.style.display = 'flex';
}

function closeChat() {
    chat.classList.add('is-hidden');
    if (showChatButton) showChatButton.style.display = 'flex';
    if (closeChatButton) closeChatButton.style.display = 'none';
}

function renderConversationsList() {
    conversationsListData.forEach(conversation => {
        const conversationItem = document.createElement('div');
        conversationItem.classList.add('chat__conversations-list-item');
        conversationItem.addEventListener('click', openConversation);
        conversationItem.innerHTML = `
            <div class="chat__conversations-data">
                <p class="chat__conversations-last-message">${conversation.lastMessage}</p>
                <p class="chat__conversations-info">${conversation.author} • ${conversation.lastMessageTime}</p>
            </div>
            ${conversation.isUnread ? unreadIcon : rightArrow}
        `;
        conversationsList.appendChild(conversationItem);
    })
}

function renderQuestionsList() {
    questionsListData.forEach(conversation => {
        const questionItem = document.createElement('div');
        questionItem.classList.add('chat__questions-list-item');
        questionItem.innerHTML = `
            <p class="chat__conversations-last-message">${conversation.question}</p>
            ${rightArrow}`;
        questionsList.appendChild(questionItem);
    })
}

function openQuestionBlock() {
    conversationsBlock.classList.add('is-hidden');
    questionsBlock.classList.remove('is-hidden');

}

function closeQuestionBlock() {
    questionsBlock.classList.add('is-hidden');
    conversationsBlock.classList.remove('is-hidden');
}

function openConversation() {
    mainPage.classList.add('is-hidden');
    conversationPage.classList.remove('is-hidden');
}


function initWidget() {
    body.innerHTML = widgetHTML;


    widgetWrap = document.getElementById('chat-widget__wrap');
    chat = widgetWrap?.querySelector('.chat');


    showChatButton = widgetWrap?.querySelector('.show-chat-button');
    closeChatButton = widgetWrap?.querySelector('.close-chat-button');
    askQuestionButton = widgetWrap?.querySelector('.ask-question');

    conversationsBlock = widgetWrap?.querySelector('.chat__conversations-block');
    conversationsList = widgetWrap?.querySelector('.chat__conversations-list');
    questionsBlock = widgetWrap?.querySelector('.chat__questions-block');
    questionsList = widgetWrap?.querySelector('.chat__questions-list');

    mainPage = widgetWrap?.querySelector('.chat__main');
    conversationPage = widgetWrap?.querySelector('.chat__conversation');

    // showChatButton.addEventListener('click', showChat);
    // closeChatButton.addEventListener('click', closeChat);
}

initWidget()
renderConversationsList();
renderQuestionsList();







