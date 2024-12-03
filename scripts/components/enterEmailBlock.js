import { robotAvatar } from './robotAvatar';
import { sendIcon } from './icons';

export const enterEmailBlock = `
    <div class="message-wrap">
        ${robotAvatar}
        <div class="message admin-message">
            Give the team a way to reach you
        </div>
    </div>
    <div class="message-wrap">
        ${robotAvatar}
        <div class="input-block message admin-message">
            <p>Enter email</p>
            <p class="input-block__error is-hidden"></p>
            <div class="input-block__input-wrap">
                <input id="enter-email-input" type="email" placeholder="example@email.com"/>
                <div class="input-block__send-button">${sendIcon}</div>
            </div>
        </div>
    </div>`;
