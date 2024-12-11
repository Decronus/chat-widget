import { homeIcon, messageIcon } from './icons';

export const bottomPanel = `
    <div class="bottom-panel__wrap">
        <div class="bottom-panel">
            <div class="bottom-panel__cell bottom-panel__home-button">
                ${homeIcon}
                <p class="bottom-panel__cell-text">Home</p>
            </div>
            <div class="bottom-panel__cell bottom-panel__messages-button">
                ${messageIcon}
                <p class="bottom-panel__cell-text">Conversations</p>
            </div>
        </div>
    </div>`;
