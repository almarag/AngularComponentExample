import { FORMS } from '../Types/forms';

const initialState = [];

export function FormsReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case FORMS.SUBMIT_FORM:
            return [...state, action.payload];
        case FORMS.RESET_FORM:
            return [];
        default:
            return state;
    }
}
