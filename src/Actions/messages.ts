import { MESSAGES } from '../Types/messages';

function addMessage(message: string) {
    return {
        payload: message,
        type: MESSAGES.ADD_MESSAGE
    };
}

export default { addMessage };
