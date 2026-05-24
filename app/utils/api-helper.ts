import { showMessage } from "react-native-flash-message";

export const convertToFormData = <T extends Record<string, any>>(data: T): FormData => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            if (typeof value === 'object') {
                if (Array.isArray(value)) {
                    value.forEach((item) => formData.append(key, item));
                } else {
                    formData.append(key, value);
                }
            } else {
                formData.append(key, value);
            }
        }
    });

    return formData;
};

export const convertToQueryParams = (params: Record<string, any>) => {

    const keyValuePairs = [];
    for (const key in params) {
        if (encodeURIComponent(params[key])) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
        }
    }
    return keyValuePairs.join('&');
};

export const handleErrorMessage = (error: any) => {

    let errorMessage = 'Something went wrong';

    if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
    } else if (error.message) {
        errorMessage = error.message;
    }

    showMessage({
        message: 'Unable to proceed',
        description: errorMessage,
        type: 'danger',
        icon: 'danger',
        hideOnPress: true,
        duration: 3000
    })
}