import { MESSAGES } from '../Types/messages';

const initialState = [];

export function MessagesReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case MESSAGES.ADD_MESSAGE: {
            return [...state, action.payload];
        }
        default: {
            return state;
        }
    }
}
