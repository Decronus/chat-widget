import { Picker } from 'emoji-mart';

let emojiPicker;

export function createEmojiPicker() {
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
    emojiPicker.style.visibility = 'hidden';
    document.body.appendChild(emojiPicker);
}

export function toggleEmojiPicker() {
    if (emojiPicker.style.visibility === 'visible') {
        closeEmojiPicker();
    } else {
        openEmojiPicker();
    }
}

export function openEmojiPicker() {
    emojiPicker.style.visibility = 'visible';
}

export function closeEmojiPicker() {
    emojiPicker.style.visibility = 'hidden';
}
