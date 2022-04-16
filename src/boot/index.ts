import { Application } from "express";
import * as express from "express";
import * as path from "path";
import * as expressLayouts from "express-ejs-layouts";
import * as cookieParser from "cookie-parser";
import flash = require('connect-flash');


export default function boot(app: Application) {


    // ! cookie parser
    app.use(cookieParser())

    // ! flash
    app.use(flash());

    // !VIEW ENGINE
    app.set("view engine", "ejs");
    app.set("views", "views");
    app.set("layout", "./layouts/mainLayout.ejs");
    app.use(expressLayouts);

    // !Public Routes
    app.use(express.static(path.join(__dirname, "public")))
} 