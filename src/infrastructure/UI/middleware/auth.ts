import { Request, Response } from "express";
import { authUserController } from "../../../DiContainer";
import { IUser } from "../../../application/User/domain/IUser";


declare module 'express-serve-static-core' {
    interface Request {
        user?: IUser;
    }
}
export const authMiddleware = async (req: Request, res: Response, next: any) => {
    try {
        //console.log(req.headers.authorization)
        const token = req.headers.authorization?.split('jwt')[1].trim()
        //console.log(token)
        if (!token) {
            return res.status(401).json({ error: "Credentials are not provided" })
        }
        req.user = await authUserController.authenticate(token)

        next()
    } catch (error: any) {
        return res.status(401).json({ error: error.message })
    }
}