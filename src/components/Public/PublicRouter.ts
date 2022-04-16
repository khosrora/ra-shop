import { Router, Request, Response } from "express"
const publicRouter: Router = Router();


publicRouter.get("/", (req: Request, res: Response) => {
    res.render("test.ejs" , {
        name : "khosrora"
    })
})


export default publicRouter;