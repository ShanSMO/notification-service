import { NotificationMessage } from "../modals/NotificationMessage";
import { ERROR_CODES, ERROR_MESSAGES, HTTP_STATUSES } from "../utils/errorCodes";

export const sendNotification = (message: NotificationMessage)  => {
    if (message.body) {
        console.log("Sent notification")
        return true;
    } else {
        return createError(
            ERROR_MESSAGES.EMPTY_BODY, 
            ERROR_CODES.EMPTY_BODY, 
            HTTP_STATUSES.BAD_REQUEST
        );
    }
}