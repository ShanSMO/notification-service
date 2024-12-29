import express, {Request, Response} from "express";
import { StatusCodes } from "http-status-codes";
import { sendNotification } from "./services/message-service";

export const router = express.Router()
const timeLog = (_req: any, _res: any, next: () => void) => {
    console.log('Time: ', Date.now())
    next()
  }
router.use(timeLog)

router.get('/health', (req, res) => {
  res.status(StatusCodes.OK).json({message: 'healthy'})
});


router.post('/send', (req, res) => {
    sendNotification({body: '', title: ''});
    res.status(StatusCodes.OK).json({message: 'Notification sent'});
})

