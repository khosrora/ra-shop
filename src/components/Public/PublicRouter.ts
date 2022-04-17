import { Router } from "express"
// * Router
const publicRouter: Router = Router();
// *controller
import PublicController from './PublicController';
const publicControllerInstance = new PublicController();


publicRouter.get("/", publicControllerInstance.index);
publicRouter.get("/aboutUs", publicControllerInstance.aboutUs);
publicRouter.get("/contactUs", publicControllerInstance.contactUs);
publicRouter.get("/login", publicControllerInstance.login);
publicRouter.get("/register", publicControllerInstance.register);


export default publicRouter;