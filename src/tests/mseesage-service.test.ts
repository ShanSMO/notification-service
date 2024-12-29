import { sendNotification } from "../services/message-service"

describe("Test notification functions", () => {
    test("Send notification - empty body", () => {
        expect(sendNotification({
            body: '',
            title: ''
        })).toEqual({
            message: 'Message body should not be empty',
            code: 'ER00400',
            status: 'BAD_REQUEST'
        });
    })

    test("Send notification - with body", () => {
        expect(sendNotification({
            body: 'Test',
            title: ''
        })).toBe(true);
    })
})