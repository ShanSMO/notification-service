type ErrorResponse = {
    message: string;
    code: string;
    status: string;
};

export const createError = (message: string, code: string, status: string): ErrorResponse => {
    return { message, code, status };
};