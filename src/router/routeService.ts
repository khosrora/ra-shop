import { Application, Router } from "express";
import RouteEngine from './router';
import publicRouter from './../components/Public/PublicRouter';
import userRouter from './../components/User/UserRouter';



class RouteService {
    private app: Application;
    private router: RouteEngine;

    public constructor(app: Application) {
        this.app = app;
        this.router = new RouteEngine();
        this.bindRouters();
    }

    public bindRouters() {
        this.router.registerRouter("/" , publicRouter)
        this.router.registerRouter("/auth" , userRouter)
    }

    public run() {
        this.router.getRouters().forEach((router: Router, route: string) => {
            this.app.use(route, router)
        })
    }
}

export default RouteService;