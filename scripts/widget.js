const widgetHTML = `
<div id="chat-widget__wrap">
    <div class="chat-widget">
        <div class="chat">
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
                <div class="chat__body-footer">
                    <div class="button ask-question" style="align-self: flex-end">
                        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.90534 25C8.80667 25 8.70736 24.9787 8.61541 24.936C8.39245 24.8312 8.25085 24.616 8.24925 24.3796L8.2233 20.303H8.04967C5.54098 20.303 3.5 18.3618 3.5 15.9752V7.32833C3.5 4.94171 5.54098 3 8.04967 3H20.9503C23.459 3 25.5 4.94171 25.5 7.32833V15.9752C25.5 18.3618 23.459 20.303 20.9503 20.303H15.6273L9.30225 24.8726C9.18597 24.9567 9.04597 25 8.90534 25ZM8.04967 4.24816C6.26466 4.24816 4.81217 5.62979 4.81217 7.32833V15.9752C4.81217 17.6732 6.26466 19.0548 8.04967 19.0548H8.87554C9.23626 19.0548 9.52939 19.3321 9.53163 19.6752L9.55341 23.1241L15.0094 19.1822C15.1237 19.0993 15.2631 19.0548 15.4063 19.0548H20.9503C22.7353 19.0548 24.1878 17.6732 24.1878 15.9752V7.32833C24.1878 5.62979 22.7353 4.24816 20.9503 4.24816H8.04967ZM15.1442 14.3907L15.1481 12.9201C15.8397 12.7982 16.4769 12.4819 16.9866 11.9998C17.6539 11.3678 18.0226 10.5267 18.0249 9.63084C18.029 7.78237 16.4516 6.27459 14.508 6.27032C14.5054 6.27032 14.5032 6.27032 14.501 6.27032C12.5609 6.27032 10.9799 7.76957 10.9751 9.6156C10.9742 9.95994 11.2673 10.2403 11.6296 10.2409H11.6312C11.9929 10.2409 12.2864 9.96238 12.2873 9.61804C12.2902 8.45947 13.2827 7.51848 14.5006 7.51848C14.5006 7.51848 14.5035 7.51848 14.5051 7.51848C15.725 7.52152 16.7152 8.468 16.7127 9.6284C16.7114 10.1903 16.4798 10.7187 16.0608 11.1149C15.643 11.5104 15.0891 11.728 14.5003 11.728C14.4984 11.728 14.4962 11.7274 14.4933 11.728C14.32 11.728 14.1534 11.7932 14.0304 11.9096C13.907 12.0266 13.8375 12.1851 13.8372 12.3508L13.8321 14.3882C13.8311 14.7326 14.1242 15.0129 14.4865 15.0135H14.4881C14.8498 15.0135 15.1433 14.735 15.1442 14.3907ZM14.4852 15.5231C14.0263 15.522 13.6535 15.875 13.6524 16.3115C13.6513 16.748 14.0224 17.1026 14.4812 17.1037C14.9401 17.1047 15.3129 16.7517 15.314 16.3153C15.3151 15.8788 14.944 15.5241 14.4852 15.5231Z"
                                  fill="white"/>
                        </svg>
                        Ask a question
                    </div>
                </div>
            </div>
            <!---->
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
</div>`;

const widgetCSS = `
@charset "UTF-8";
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
#chat-widget__wrap * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Inter, sans-serif;
  font-weight: 400; /* Средний вес */
  font-stretch: 100%; /* Обычная ширина */
  font-style: normal; /* Обычный стиль */
}
#chat-widget__wrap h1 {
  font-size: 34px;
  font-weight: 600;
  line-height: 41px;
}
#chat-widget__wrap h1 {
  color: #F8F8F8;
}
#chat-widget__wrap .chat-widget {
  position: absolute;
  right: 30px;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
}
#chat-widget__wrap .chat-widget .chat {
  width: 420px;
  height: 640px;
  max-height: calc(100vh - 130px);
  box-shadow: 10px 10px 40px 0 rgba(0, 0, 0, 0.0784313725);
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
  position: relative;
  display: flex;
  flex-direction: column;
  opacity: 1;
}
#chat-widget__wrap .chat-widget .chat.is-hidden {
  height: 0;
  width: 0;
  opacity: 0;
}
#chat-widget__wrap .chat-widget .chat .chat__header {
  height: 221px;
  width: 100%;
  background: #5C59E8;
  border-radius: 0 0 24px 24px;
  position: relative;
  z-index: 10;
  padding: 50px 32px 30px;
}
#chat-widget__wrap .chat-widget .chat .chat__body {
  display: flex;
  padding: 12px 15px;
  position: relative;
  flex-grow: 1;
}
#chat-widget__wrap .chat-widget .chat .chat__body .chat__body-footer {
  width: 100%;
  align-self: flex-end;
}
#chat-widget__wrap .chat-widget .close-chat-button {
  display: none;
}
#chat-widget__wrap .rounded-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #5C59E8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.1607843137);
  transition: all 0.2s ease-in-out;
}
#chat-widget__wrap .rounded-button:hover {
  transform: scale(1.15);
}
#chat-widget__wrap .button {
  width: 100%;
  height: 72px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  background: #5C59E8;
  border: 1px solid #4F4DC8;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
}
#chat-widget__wrap .button:hover {
  transform: scale(1.01);
}

/*# sourceMappingURL=widget.css.map */`;

const body = document.body;

let widgetWrap;
let chat;

let showChatButton;
let closeChatButton;
let askQuestionButton;

function showChat() {
    chat.classList.remove('is-hidden');
    if (showChatButton) showChatButton.style.display = 'none';
    if (closeChatButton) closeChatButton.style.display = 'flex';
}

function closeChat() {
    chat.classList.add('is-hidden');
    if (showChatButton) showChatButton.style.display = 'flex';
    if (closeChatButton) closeChatButton.style.display = 'none';
}

function initWidget() {
    function addHTML() {
        widgetWrap = document.createElement('div');
        widgetWrap.id = 'chat-widget__wrap';
        widgetWrap.innerHTML = widgetHTML;
        body.appendChild(widgetWrap);
    }


    function addStyles() {
        const style = document.createElement('style');
        style.innerHTML = widgetCSS;
        document.head.appendChild(style);
    }

    addHTML();
    // addStyles();

    chat = widgetWrap?.querySelector('.chat');
    showChatButton = widgetWrap?.querySelector('.show-chat-button');
    closeChatButton = widgetWrap?.querySelector('.close-chat-button');
    askQuestionButton = widgetWrap?.querySelector('.ask-question');
}

initWidget();
