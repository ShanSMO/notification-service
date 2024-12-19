import { ErrorResponse } from "../modals/ErrorResponse";
import { NotificationMessage } from "../modals/NotificationMessage";

export const sendNotification = (message: NotificationMessage)  => {
    if (message.body) {
        console.log("Sent notification")
        return true;
    } else {
        const error: ErrorResponse = {
            message: 'Message body should not empty',
            code: 'ER001',
            status: 'BAD_REQUEST'
        }
        return error;
    }
}