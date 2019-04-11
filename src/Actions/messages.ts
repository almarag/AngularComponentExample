import { MESSAGES } from '../Types/messages';

export default function addMessage(message: string) {
    return {
        payload: message,
        type: MESSAGES.ADD_MESSAGE
    };
}
