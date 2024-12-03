import { Picker } from 'emoji-mart';

let emojiPicker;

export function createEmojiPicker() {
    // const emojiPickerContainer = document.querySelectorAll('.chat__conversation-input-controls');
    const chatConversationInput = document.querySelectorAll('.chat__conversation-input');
    const toggleEmojiPickerButton = document.querySelectorAll('.toggle-emoji-picker-button');
    toggleEmojiPickerButton.forEach(el => el.addEventListener('click', toggleEmojiPicker));

    emojiPicker = new Picker({
        data: async () => {
            const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data');

            return response.json();
        },
        onEmojiSelect: emoji => {
            chatConversationInput.forEach(el => (el.value += emoji.native)); // Логика выбора эмодзи
        },
    });
    emojiPicker.style.position = 'absolute';
    emojiPicker.style.bottom = '190px';
    emojiPicker.style.right = '64px';
    emojiPicker.style.visibility = 'visible';
    document.body.appendChild(emojiPicker);
}

export function toggleEmojiPicker() {
    emojiPicker.style.visibility = emojiPicker.style.visibility === 'visible' ? 'hidden' : 'visible';
}
