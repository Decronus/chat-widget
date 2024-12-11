import { conversationsPage, askQuestionBlock, bottomPanelHomeButtons, widgetWrap, bottomPanelMessageButtons } from './initComponents';
import { bottomPanel } from '../components/bottomPanel';
import { openConversationsPage, openMainPage } from '../widget';

export function initBottomPanel() {
    askQuestionBlock.insertAdjacentHTML('beforeend', bottomPanel);
    conversationsPage.insertAdjacentHTML('beforeend', bottomPanel);

    bottomPanelHomeButtons = widgetWrap?.querySelectorAll('.bottom-panel__home-button');
    bottomPanelHomeButtons?.forEach(el => el?.addEventListener('click', openMainPage));

    bottomPanelMessageButtons = widgetWrap?.querySelectorAll('.bottom-panel__messages-button');
    bottomPanelMessageButtons?.forEach(el => el?.addEventListener('click', openConversationsPage));

    bottomPanelHomeButtons.forEach(el => el.classList.add('active'));
    bottomPanelMessageButtons.forEach(el => el.classList.remove('active'));
}
