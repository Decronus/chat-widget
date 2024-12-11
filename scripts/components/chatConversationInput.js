import { scrapIcon, smileIcon } from './icons';

export const chatConversationInput = id => {
    return `
    <div class="chat__conversation-input-wrap">
        <input id="${id}" class="chat__conversation-input" type="text" placeholder="Type a reply..."/>              
        <div class="chat__conversation-input-controls">
            <div class="toggle-emoji-picker-button">
                ${smileIcon}                        
            </div>
            <div class="scrap-button">
                ${scrapIcon}
            </div>
            <input 
                type="file" 
                id="file" 
                class="chat__conversation-input-file" 
                accept="image/*, text/*"
                style="position: absolute; top: -1000px; left: -1000px; visibility: hidden"
                />
        </div>
    </div>`;
};
