import { FORMS } from '../Types/forms';

function submitForm(data: any) {
    return {
        payload: data,
        type: FORMS.SUBMIT_FORM
    };
}

function resetForm() {
    return {
        type: FORMS.RESET_FORM
    };
}

export default { submitForm, resetForm };
