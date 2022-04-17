import { Request, Response } from "express"



export default class PublicController {

    async index(req: Request, res: Response) {
        res.render("public/home.ejs", {
            title: "فروشگاه رابا",
            bread: ""
        })
    }
    async aboutUs(req: Request, res: Response) {
        res.render("public/aboutUs.ejs", {
            title: "درباره ما",
            bread: "درباره ما",
        })
    }
    async contactUs(req: Request, res: Response) {
        res.render("public/contactUs.ejs", {
            title: "تماس با ما",
            bread: "تماس با ما",
        })
    }
    async login(req: Request, res: Response) {
        res.render("public/auth/login.ejs", {
            title: "ورود کاربر",
            bread: "ورود کاربر",
        })
    }
    async register(req: Request, res: Response) {
        res.render("public/auth/register.ejs", {
            title: "ثبت نام کاربر",
            bread: "ثبت نام کاربر",
        })
    }
}