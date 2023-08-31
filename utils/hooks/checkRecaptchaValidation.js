export const checkFormValidation = (set, recaptcha) => {
    const token = recaptcha?.getValue();
    if (token) {
        return set(true);
    }
    return set(false);
};