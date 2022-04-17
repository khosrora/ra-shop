import { Request, Response } from 'express'



export default class UserController {

    async registerUser(req: Request, res: Response) {
        try {
            console.log(req.body);
        } catch (err) {

        }
    }

}