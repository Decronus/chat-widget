import { getSupportConversationList, getSupportMessageList, setEmail, token } from './fetches';

void getSupportConversationList();
// void getSupportMessageList();
void setEmail({ user_agent: navigator.userAgent, ip: '127.0.0.1', token, email: 'zick3333@mail.ru' });

///// COMPONENTS /////
const rightArrow = `
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00385 3.41141C7.7492 3.15677 7.31719 3.13924 7.03892 3.37227C6.76065 3.6053 6.7415 4.00064 6.99615 4.25529L11.3058 8.56492C12.3687 9.62783 12.3687 11.3722 11.3058 12.4351L6.99615 16.7447C6.7415 16.9994 6.76065 17.3947 7.03892 17.6278C7.31719 17.8608 7.7492 17.8433 8.00385 17.5886L12.3135 13.279C13.8541 11.7384 13.8541 9.26163 12.3135 7.72105L8.00385 3.41141Z" fill="#5C59E8"/>
    </svg>`;

function leftArrow() {
    return `
    <svg style="transform: rotate(180deg)" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00385 3.41141C7.7492 3.15677 7.31719 3.13924 7.03892 3.37227C6.76065 3.6053 6.7415 4.00064 6.99615 4.25529L11.3058 8.56492C12.3687 9.62783 12.3687 11.3722 11.3058 12.4351L6.99615 16.7447C6.7415 16.9994 6.76065 17.3947 7.03892 17.6278C7.31719 17.8608 7.7492 17.8433 8.00385 17.5886L12.3135 13.279C13.8541 11.7384 13.8541 9.26163 12.3135 7.72105L8.00385 3.41141Z" fill="#5C59E8"/>
    </svg>`;
}

function leftArrow2() {
    return `
    <svg style="cursor: pointer" width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.304688 8.25L0.902344 7.65234L7.65234 0.902344L8.25 0.304688L9.41016 1.5L8.84766 2.09766L2.66016 8.25L8.84766 14.4023L9.44531 15L8.25 16.1953L7.65234 15.5977L0.902344 8.84766L0.304688 8.25Z" fill="#F8F8F8"/>
    </svg>`;
}

function scrapIcon(onclick = undefined) {
    return `
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3862 5.06294C14.6916 4.78305 14.7122 4.30862 14.4323 4.00328C14.1524 3.69794 13.678 3.67732 13.3726 3.95721L4.86728 11.7538C2.66272 13.7746 2.65669 17.2482 4.85422 19.2767C6.84029 21.11 9.91042 21.08 11.8602 19.2082L19.8467 11.5411C21.0047 10.4295 21.0933 8.60715 20.0486 7.3884C18.9014 6.0499 16.8574 5.97141 15.6109 7.21797L9.84909 12.9797C9.5562 13.2726 9.5562 13.7475 9.84909 14.0404C10.142 14.3333 10.6169 14.3333 10.9097 14.0404L16.6715 8.27863C17.3002 7.64991 18.3311 7.6895 18.9098 8.36458C19.4366 8.97927 19.3919 9.89839 18.8079 10.4591L10.8214 18.1261C9.44388 19.4485 7.27481 19.4698 5.87164 18.1745C4.31907 16.7414 4.32333 14.2872 5.88087 12.8595L14.3862 5.06294Z" fill="#667085"/>
    </svg>`;
}

function smileIcon(onclick = undefined) {
    return `
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.66459 13.5292C6.03294 13.345 6.4804 13.4924 6.6676 13.8582L6.66912 13.861C6.67225 13.8667 6.67912 13.8789 6.68992 13.8967C6.71157 13.9324 6.74876 13.99 6.80313 14.0625C6.91211 14.2078 7.08796 14.4099 7.34352 14.6144C7.84512 15.0156 8.68219 15.45 10 15.45C11.3178 15.45 12.1549 15.0156 12.6565 14.6144C12.912 14.4099 13.0879 14.2078 13.1969 14.0625C13.2512 13.99 13.2884 13.9324 13.3101 13.8967C13.3209 13.8789 13.3277 13.8667 13.3309 13.861L13.3324 13.8582C13.5196 13.4924 13.9671 13.345 14.3354 13.5292C14.7059 13.7144 14.8561 14.1649 14.6708 14.5354L14 14.2C14.6708 14.5354 14.671 14.535 14.6708 14.5354L14.67 14.5371L14.669 14.5389L14.6669 14.5432L14.6613 14.554C14.6571 14.5621 14.6517 14.5721 14.6452 14.5839C14.6322 14.6075 14.6147 14.6383 14.5923 14.6752C14.5475 14.7489 14.4831 14.8475 14.3969 14.9625C14.2246 15.1922 13.963 15.4901 13.5935 15.7857C12.8451 16.3844 11.6822 16.95 10 16.95C8.31781 16.95 7.15488 16.3844 6.40648 15.7857C6.03704 15.4901 5.77539 15.1922 5.60313 14.9625C5.51687 14.8475 5.4525 14.7489 5.40774 14.6752C5.38534 14.6383 5.36778 14.6075 5.3548 14.5839L5.34539 14.5666L5.33869 14.554L5.33313 14.5432L5.33095 14.5389L5.33002 14.5371C5.32981 14.5367 5.32918 14.5354 6 14.2L5.32918 14.5354C5.14394 14.1649 5.29411 13.7144 5.66459 13.5292Z" fill="#667085"/>
        <path d="M8 7.70001C8 8.52844 7.32843 9.20001 6.5 9.20001C5.67157 9.20001 5 8.52844 5 7.70001C5 6.87158 5.67157 6.20001 6.5 6.20001C7.32843 6.20001 8 6.87158 8 7.70001Z" fill="#667085"/>
        <path d="M13.5 9.20001C14.3284 9.20001 15 8.52844 15 7.70001C15 6.87158 14.3284 6.20001 13.5 6.20001C12.6716 6.20001 12 6.87158 12 7.70001C12 8.52844 12.6716 9.20001 13.5 9.20001Z" fill="#667085"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10.2C20 15.7229 15.5228 20.2 10 20.2C4.47715 20.2 0 15.7229 0 10.2C0 4.67716 4.47715 0.200012 10 0.200012C15.5228 0.200012 20 4.67716 20 10.2ZM18.5 10.2C18.5 14.8944 14.6944 18.7 10 18.7C5.30558 18.7 1.5 14.8944 1.5 10.2C1.5 5.50559 5.30558 1.70001 10 1.70001C14.6944 1.70001 18.5 5.50559 18.5 10.2Z" fill="#667085"/>
    </svg>`;
}

const unreadIcon = `
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10.5001" r="4" fill="#D80027"/>
    </svg>`;

const searchIcon = `
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.375 6.4375C11.375 7.69531 10.9648 8.87109 10.2812 9.80078L13.7266 13.2734C14.082 13.6016 14.082 14.1758 13.7266 14.5039C13.3984 14.8594 12.8242 14.8594 12.4961 14.5039L9.02344 11.0312C8.09375 11.7422 6.91797 12.125 5.6875 12.125C2.54297 12.125 0 9.58203 0 6.4375C0 3.32031 2.54297 0.75 5.6875 0.75C8.80469 0.75 11.375 3.32031 11.375 6.4375ZM5.6875 10.375C7.08203 10.375 8.36719 9.63672 9.07812 8.40625C9.78906 7.20312 9.78906 5.69922 9.07812 4.46875C8.36719 3.26562 7.08203 2.5 5.6875 2.5C4.26562 2.5 2.98047 3.26562 2.26953 4.46875C1.55859 5.69922 1.55859 7.20312 2.26953 8.40625C2.98047 9.63672 4.26562 10.375 5.6875 10.375Z" fill="#3047EC"/>
    </svg>`;

const robotIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 14C9.32843 14 10 13.3284 10 12.5C10 11.6715 9.32843 11 8.5 11C7.67157 11 7 11.6715 7 12.5C7 13.3284 7.67157 14 8.5 14Z" fill="white"/>
        <path d="M17 12.5C17 13.3284 16.3284 14 15.5 14C14.6716 14 14 13.3284 14 12.5C14 11.6715 14.6716 11 15.5 11C16.3284 11 17 11.6715 17 12.5Z" fill="white"/>
        <path d="M9.32918 15.6645C9.51442 15.2941 9.96493 15.1439 10.3354 15.3291L10.5466 15.4347C11.4615 15.8922 12.5385 15.8922 13.4534 15.4347L13.6646 15.3291C14.0351 15.1439 14.4856 15.2941 14.6708 15.6645C14.8561 16.035 14.7059 16.4855 14.3354 16.6708L14.1243 16.7763C12.787 17.445 11.213 17.445 9.87574 16.7763L9.66459 16.6708C9.29411 16.4855 9.14394 16.035 9.32918 15.6645Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6964 2.7785C15.8502 2.39391 15.6631 1.95743 15.2785 1.8036C14.894 1.64976 14.4575 1.83682 14.3036 2.22141L13.6654 3.8171C13.662 3.82543 13.6586 3.82935 13.6558 3.8319C13.6522 3.83513 13.6468 3.83846 13.6399 3.84061C13.633 3.84276 13.6267 3.84304 13.6219 3.84241C13.6182 3.8419 13.6131 3.84063 13.6056 3.83565C12.8739 3.34783 11.8829 3.57067 11.4305 4.32478L10.4254 5.99996H9C7.13623 5.99996 6.20435 5.99996 5.46927 6.30444C4.48915 6.71041 3.71046 7.48911 3.30448 8.46922C3 9.20431 3 10.1362 3 12C3 14.7956 3 16.1934 3.45672 17.2961C4.06569 18.7662 5.23373 19.9343 6.7039 20.5432C7.80653 21 9.20435 21 12 21C14.7956 21 16.1935 21 17.2961 20.5432C18.7663 19.9343 19.9343 18.7662 20.5433 17.2961C21 16.1934 21 14.7956 21 12C21 10.1362 21 9.20431 20.6955 8.46922C20.2895 7.48911 19.5108 6.71041 18.5307 6.30444C17.7956 5.99996 16.8638 5.99996 15 5.99996H12.1746L12.7167 5.09652C12.7285 5.0768 12.7544 5.07098 12.7736 5.08373C13.5876 5.62642 14.6947 5.28255 15.0581 4.37419L15.6964 2.7785ZM4.53458 9.91344C4.50081 10.4084 4.5 11.0475 4.5 12C4.5 13.4183 4.50081 14.4069 4.55361 15.1808C4.60549 15.9411 4.70251 16.384 4.84254 16.722C5.29926 17.8247 6.1753 18.7007 7.27793 19.1574C7.616 19.2974 8.05881 19.3945 8.81917 19.4463C9.59301 19.4991 10.5817 19.5 12 19.5C13.4183 19.5 14.407 19.4991 15.1808 19.4463C15.9412 19.3945 16.384 19.2974 16.7221 19.1574C17.8247 18.7007 18.7007 17.8247 19.1575 16.722C19.2975 16.384 19.3945 15.9411 19.4464 15.1808C19.4992 14.4069 19.5 13.4183 19.5 12C19.5 11.0475 19.4992 10.4084 19.4654 9.91344C19.4326 9.43198 19.3736 9.19755 19.3097 9.04325C19.056 8.43068 18.5693 7.94399 17.9567 7.69026C17.8024 7.62634 17.568 7.56739 17.0865 7.53454C16.5916 7.50077 15.9524 7.49996 15 7.49996H9C8.04759 7.49996 7.40841 7.50077 6.91348 7.53454C6.43203 7.56739 6.1976 7.62634 6.04329 7.69026C5.43072 7.94399 4.94404 8.43068 4.6903 9.04325C4.62639 9.19755 4.56743 9.43198 4.53458 9.91344Z" fill="white"/>
    </svg>`;

const messageIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.00002 13.5C9.5523 13.5 10 13.0523 10 12.5C10 11.9477 9.5523 11.5 9.00002 11.5C8.44773 11.5 8.00002 11.9477 8.00002 12.5C8.00002 13.0523 8.44773 13.5 9.00002 13.5Z" fill="#363538"/>
        <path d="M14 12.5C14 13.0523 13.5523 13.5 13 13.5C12.4477 13.5 12 13.0523 12 12.5C12 11.9477 12.4477 11.5 13 11.5C13.5523 11.5 14 11.9477 14 12.5Z" fill="#363538"/>
        <path d="M17 13.5C17.5523 13.5 18 13.0523 18 12.5C18 11.9477 17.5523 11.5 17 11.5C16.4477 11.5 16 11.9477 16 12.5C16 13.0523 16.4477 13.5 17 13.5Z" fill="#363538"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8305 2.75C7.90524 2.75 3.91099 6.73812 3.91099 11.6596V13.5877L2.38441 17.2936C1.9308 18.3948 2.67021 19.6191 3.85399 19.734L7.66107 20.1037L9.43549 20.724C15.4527 22.8275 21.75 18.3671 21.75 11.9965V11.6596C21.75 6.73812 17.7558 2.75 12.8305 2.75ZM5.41099 11.6596C5.41099 7.56826 8.73196 4.25 12.8305 4.25C16.929 4.25 20.25 7.56826 20.25 11.6596V11.9965C20.25 17.3315 14.975 21.0715 9.93048 19.308L7.98569 18.6282L3.99897 18.241C3.81452 18.2231 3.70192 18.0335 3.77135 17.8649L5.41099 13.8845V11.6596Z" fill="#363538"/>
    </svg>`;

const homeIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 18.75C14.4142 18.75 14.75 18.4142 14.75 18C14.75 17.5858 14.4142 17.25 14 17.25H10C9.58579 17.25 9.25 17.5858 9.25 18C9.25 18.4142 9.58579 18.75 10 18.75H14Z" fill="#363538"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83261 8.5339L9.5012 3.99902C10.9621 2.83032 13.0379 2.83032 14.4988 3.99902L20.1674 8.5339C21.2989 9.43914 21.8524 10.8856 21.6142 12.315L20.5571 18.6576C20.2356 20.5863 18.5668 22 16.6115 22H7.38849C5.43314 22 3.76438 20.5863 3.44292 18.6576L2.38581 12.315C2.14758 10.8856 2.70105 9.43914 3.83261 8.5339ZM4.76965 9.7052L10.4382 5.17033C11.3513 4.43989 12.6487 4.43989 13.5617 5.17033L19.2303 9.7052C19.9375 10.271 20.2835 11.175 20.1346 12.0684L19.0775 18.411C18.8766 19.6165 17.8336 20.5 16.6115 20.5H7.38849C6.1664 20.5 5.12342 19.6165 4.92251 18.411L3.8654 12.0684C3.71651 11.175 4.06243 10.271 4.76965 9.7052Z" fill="#363538"/>
    </svg>


`;

// ///// ENDPOINTS /////
// const supportAPI = {
//   conversationList: '/support/conversation/list',
//   messageList: '/support/message/list',
//   messageSetEmail: 'support/message/set_email',
// };

///// HTML /////
const widgetHTML = `
    <div id="chat-widget__wrap">
    <div class="chat-widget">
        <div class="chat">
        
            <!--MAIN-->
            <div class="chat__main is-hidden">
                <div class="chat__header">
                    <div>
                        <div class="chat__header-title">
                            <h1>Hi Aleksander 👋</h1>
                        </div>
                        <h1>How can we help?</h1>
                    </div>
                </div>
                <div class="chat__header-overlay"></div>
    
                <!--Chat body-->
                <div class="chat__body">
                    <div class="chat__body-overlay"></div>
    
                    <div class="chat__conversations-block">
                        <div class="chat__conversations-list"></div>
                                             
                        <div class="bottom-panel__wrap">
                            <div class="button ask-question" style="width: calc(100% - 30px); margin-bottom: 15px;">
                                <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.90534 25C8.80667 25 8.70736 24.9787 8.61541 24.936C8.39245 24.8312 8.25085 24.616 8.24925 24.3796L8.2233 20.303H8.04967C5.54098 20.303 3.5 18.3618 3.5 15.9752V7.32833C3.5 4.94171 5.54098 3 8.04967 3H20.9503C23.459 3 25.5 4.94171 25.5 7.32833V15.9752C25.5 18.3618 23.459 20.303 20.9503 20.303H15.6273L9.30225 24.8726C9.18597 24.9567 9.04597 25 8.90534 25ZM8.04967 4.24816C6.26466 4.24816 4.81217 5.62979 4.81217 7.32833V15.9752C4.81217 17.6732 6.26466 19.0548 8.04967 19.0548H8.87554C9.23626 19.0548 9.52939 19.3321 9.53163 19.6752L9.55341 23.1241L15.0094 19.1822C15.1237 19.0993 15.2631 19.0548 15.4063 19.0548H20.9503C22.7353 19.0548 24.1878 17.6732 24.1878 15.9752V7.32833C24.1878 5.62979 22.7353 4.24816 20.9503 4.24816H8.04967ZM15.1442 14.3907L15.1481 12.9201C15.8397 12.7982 16.4769 12.4819 16.9866 11.9998C17.6539 11.3678 18.0226 10.5267 18.0249 9.63084C18.029 7.78237 16.4516 6.27459 14.508 6.27032C14.5054 6.27032 14.5032 6.27032 14.501 6.27032C12.5609 6.27032 10.9799 7.76957 10.9751 9.6156C10.9742 9.95994 11.2673 10.2403 11.6296 10.2409H11.6312C11.9929 10.2409 12.2864 9.96238 12.2873 9.61804C12.2902 8.45947 13.2827 7.51848 14.5006 7.51848C14.5006 7.51848 14.5035 7.51848 14.5051 7.51848C15.725 7.52152 16.7152 8.468 16.7127 9.6284C16.7114 10.1903 16.4798 10.7187 16.0608 11.1149C15.643 11.5104 15.0891 11.728 14.5003 11.728C14.4984 11.728 14.4962 11.7274 14.4933 11.728C14.32 11.728 14.1534 11.7932 14.0304 11.9096C13.907 12.0266 13.8375 12.1851 13.8372 12.3508L13.8321 14.3882C13.8311 14.7326 14.1242 15.0129 14.4865 15.0135H14.4881C14.8498 15.0135 15.1433 14.735 15.1442 14.3907ZM14.4852 15.5231C14.0263 15.522 13.6535 15.875 13.6524 16.3115C13.6513 16.748 14.0224 17.1026 14.4812 17.1037C14.9401 17.1047 15.3129 16.7517 15.314 16.3153C15.3151 15.8788 14.944 15.5241 14.4852 15.5231Z"
                                          fill="white"/>
                                </svg>
                                Ask a question
                            </div>
                        
                            <div class="bottom-panel">
                                <div class="bottom-panel__cell bottom-panel__home-button active">
                                    ${homeIcon}
                                    <p class="bottom-panel__cell-text">Home</p>
                                </div>
                                <div class="bottom-panel__cell bottom-panel__messages-button">
                                    ${messageIcon}
                                    <p class="bottom-panel__cell-text">Messages</p>
                                </div>
                            </div>
                         </div>
                    </div>
                    
<!--                    <span class="close-ask-question-page__button">${leftArrow()}</span>-->
                </div>
            </div>
            
            <!--CONVERSATION-->
            <div class="chat__conversation is-hidden">
                <div class="chat__conversation-header">
                    <span class="close-conversation-and-open-conversation-list__button">${leftArrow2()}</span>
              
                    <div class="chat__conversation-header-info">
                        <div class="chat__conversation-header-avatar">
                            AZ
                            <div class="chat__conversation-avatar-status"></div>
                        </div>
                        
                        <div class="chat__conversation-header-text">
                            <div class="chat__conversation-header-name">
                                Asal Shodiyeva
                            </div>
                             <div class="chat__conversation-header-status">
                                Active
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="conversation-chat">
                    <div class="chat__conversation-input-wrap">
                        <input class="chat__conversation-input" type="text" placeholder="Type a reply..."/>
                        
                        <div class="chat__conversation-input-controls">
                            ${smileIcon()}
                            ${scrapIcon()}
                        </div>
                    </div>
                </div>
            </div>
            
            <!--ASK QUESTION-->
            <div class="chat__ask-question is-hidden">
                <div class="chat__ask-question-header">
                    <div class="chat__ask-question-back">${leftArrow2()}</div>
                    <h3>Testing</h3>
                    
                    <div class="chat__ask-question-header-content">
                        <div class="chat__ask-question-header-avatar">AZ</div>
                        <div class="chat__ask-question-header-title">We typically reply in a few minutes</div>
                        <div class="chat__ask-question-header-subtitle">Please ask your question.</div>
                    </div>
                </div>
            </div>
            
            <!--MESSAGES-->
            <div class="chat__messages">
                <div class="chat__messages-header">
                    <h3>Messages</h3>
                </div>
                
                <div class="chat__messages-conversations-list"></div>
                
                <div class="bottom-panel__wrap">
                    <div class="bottom-panel bottom-panel__home-button">
                        <div class="bottom-panel__cell">
                            ${homeIcon}
                            <p class="bottom-panel__cell-text">Home</p>
                        </div>
                        <div class="bottom-panel__cell bottom-panel__messages-button active">
                            ${messageIcon}
                            <p class="bottom-panel__cell-text">Messages</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <!--Кнопки открытия и закрытия чата-->
        <div class="rounded-button show-chat-button">
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
        <div class="rounded-button close-chat-button">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6329 12.0058C26.0149 11.6238 26.0412 10.9758 25.6916 10.5584C25.3421 10.141 24.7491 10.1123 24.3671 10.4942L17.9026 16.9587C16.3083 18.5531 13.6918 18.5531 12.0974 16.9587L5.63291 10.4942C5.25094 10.1123 4.65793 10.141 4.30839 10.5584C3.95884 10.9758 3.98513 11.6238 4.3671 12.0058L10.8316 18.4702C13.1425 20.7811 16.8576 20.7811 19.1685 18.4702L25.6329 12.0058Z"
                      fill="white"/>
            </svg>
        </div>
        <!---->
    </div>
</div>
`;

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
    },
];

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
];

const messagesListData = [
    {
        id: 1,
        message: '👋 Hi ! How can I help?',
        isOwn: false,
        type: 'message',
    },
    {
        id: 6,
        message: 'YESTERDAY',
        type: 'divider',
    },
    {
        id: 2,
        message: 'I’m sorry bot, but you’re wrong',
        isOwn: true,
        type: 'message',
    },
    {
        id: 7,
        message: 'TODAY',
        type: 'divider',
    },
    {
        id: 3,
        message: 'Can I talk to someone please?',
        isOwn: true,
        type: 'message',
    },
    {
        id: 4,
        message: 'Hi there! I’m Hannah.',
        isOwn: false,
        type: 'message',
    },
    {
        id: 5,
        message: 'How can I help you?',
        isOwn: false,
        type: 'message',
    },
];

///// MAIN /////
const body = document.body;

let widgetWrap;
let chat;

let showChatButton;
let closeChatButton;
let askQuestionButton;

let bottomPanelHomeButtons;
let bottomPanelMessageButtons;

let closeConversationAndOpenConversationListButton;
let closeAskQuestionAndOpenMessagesButton;

let conversationsList;
let conversationsBlock;

let questionsList;

let mainPage;
let conversationPage;
let askQuestionPage;
let messagesPage;

let conversationChat;

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
        conversationItem.classList.add('conversation-list-item');
        conversationItem.addEventListener('click', openConversationPage);
        conversationItem.innerHTML = `
            <div class="conversation-data">
                <p class="conversation-last-message">${conversation.lastMessage}</p>
                <p class="conversation-info">${conversation.author} • ${conversation.lastMessageTime}</p>
            </div>
            ${conversation.isUnread ? unreadIcon : rightArrow}
        `;
        conversationsList.appendChild(conversationItem);
    });
}

function renderQuestionsList() {
    questionsListData.forEach(question => {
        const questionItem = document.createElement('div');
        questionItem.classList.add('chat__questions-list-item');
        questionItem.innerHTML = `
            <p class="chat__conversations-last-message">${question.question}</p>
            ${rightArrow}`;
        questionsList.appendChild(questionItem);
    });
}

function renderMessagesList() {
    messagesListData.forEach((message, index) => {
        const messageItem = document.createElement('div');
        if (message.type === 'divider') {
            messageItem.classList.add('conversation-divider');
        } else if (message.type === 'message') {
            messageItem.classList.add('conversation-message');
            if (message.isOwn) messageItem.classList.add('is-own');
        }

        // if (message.isOwn === messagesListData[index + 1]?.isOwn && message.isOwn !== messagesListData[index - 1]?.isOwn) {
        //     messageItem.classList.add('is-joint-first');
        // }
        // if (message.isOwn === messagesListData[index - 1]?.isOwn && message.isOwn === messagesListData[index + 1]?.isOwn) {
        //     messageItem.classList.add('is-joint');
        // }
        // if (message.isOwn === messagesListData[index - 1]?.isOwn && message.isOwn !== messagesListData[index + 1]?.isOwn) {
        //     messageItem.classList.add('is-joint-last');
        // }
        messageItem.innerHTML = message.message;
        conversationChat.appendChild(messageItem);
    });
}

function openMainPage() {
    messagesPage.classList.add('is-hidden');
    mainPage.classList.remove('is-hidden');
}

function openMessagesPage() {
    mainPage.classList.add('is-hidden');
    messagesPage.classList.remove('is-hidden');
}

function closeConversationAndOpenConversationList() {
    conversationPage.classList.add('is-hidden');
    messagesPage.classList.remove('is-hidden');
}

function closeAskQuestionAndOpenMessagePage() {
    askQuestionPage.classList.add('is-hidden');
    messagesPage.classList.remove('is-hidden');
}

function openAskQuestionPage() {
    askQuestionPage.classList.remove('is-hidden');
    mainPage.classList.add('is-hidden');
}

function closeAskQuestionPage() {
    askQuestionPage.classList.add('is-hidden');
    mainPage.classList.remove('is-hidden');
}

function openConversationPage() {
    messagesPage.classList.add('is-hidden');
    conversationPage.classList.remove('is-hidden');
}

function closeConversationPage() {
    conversationPage.classList.add('is-hidden');
    mainPage.classList.remove('is-hidden');
}

function initWidget() {
    body.innerHTML = widgetHTML;

    widgetWrap = document.getElementById('chat-widget__wrap');
    chat = widgetWrap?.querySelector('.chat');

    showChatButton = widgetWrap?.querySelector('.show-chat-button');
    showChatButton.addEventListener('click', showChat);

    closeChatButton = widgetWrap?.querySelector('.close-chat-button');
    closeChatButton.addEventListener('click', closeChat);

    bottomPanelHomeButtons = widgetWrap?.querySelectorAll('.bottom-panel__home-button');
    console.log('bottomPanelHomeButtons', bottomPanelHomeButtons);
    bottomPanelHomeButtons?.forEach(el => el?.addEventListener('click', openMainPage));

    bottomPanelMessageButtons = widgetWrap?.querySelectorAll('.bottom-panel__messages-button');
    console.log('bottomPanelMessageButtons', bottomPanelMessageButtons);
    bottomPanelMessageButtons?.forEach(el => el?.addEventListener('click', openMessagesPage));

    askQuestionButton = widgetWrap?.querySelector('.ask-question');
    askQuestionButton?.addEventListener('click', openAskQuestionPage);

    closeConversationAndOpenConversationListButton = widgetWrap?.querySelector('.close-conversation-and-open-conversation-list__button');
    closeConversationAndOpenConversationListButton?.addEventListener('click', closeConversationAndOpenConversationList);

    closeAskQuestionAndOpenMessagesButton = widgetWrap?.querySelector('.chat__ask-question-back');
    closeAskQuestionAndOpenMessagesButton?.addEventListener('click', closeAskQuestionAndOpenMessagePage);

    conversationsBlock = widgetWrap?.querySelector('.chat__conversations-block');
    conversationsList = widgetWrap?.querySelector('.chat__messages-conversations-list');

    questionsList = widgetWrap?.querySelector('.chat__questions-list');

    mainPage = widgetWrap?.querySelector('.chat__main');
    conversationPage = widgetWrap?.querySelector('.chat__conversation');
    askQuestionPage = widgetWrap?.querySelector('.chat__ask-question');
    messagesPage = widgetWrap?.querySelector('.chat__messages');

    conversationChat = widgetWrap?.querySelector('.conversation-chat');
}

window.addEventListener('DOMContentLoaded', () => {
    initWidget();
    renderConversationsList();
    // renderQuestionsList();
    renderMessagesList();
});
