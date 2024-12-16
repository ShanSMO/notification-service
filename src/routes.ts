import express, {Request, Response} from "express";
import { StatusCodes } from "http-status-codes";

export const router = express.Router()
const timeLog = (_req: any, _res: any, next: () => void) => {
    console.log('Time: ', Date.now())
    next()
  }
router.use(timeLog)

router.post('/send', (req, res) => {
    console.log("Sending notification");
    res.status(StatusCodes.OK).json({message: 'Notification sent'});
})

