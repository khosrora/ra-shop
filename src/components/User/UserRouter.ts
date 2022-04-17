import { Router } from "express"
// * Router
const userRouter: Router = Router();
// *controller
import UserController from './UserController';
const UserControllerInstance = new UserController();


userRouter.post("/register", UserControllerInstance.registerUser)


export default userRouter;