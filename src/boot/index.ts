import { Application } from "express";
import * as express from "express";
import * as session from "express-session";
import * as path from "path";
import * as expressLayouts from "express-ejs-layouts";
import * as cookieParser from "cookie-parser";
import * as passport from "passport";

import MongoStore = require('connect-mongo');;
import flash = require('connect-flash');


export default function boot(app: Application) {
    // !passport Config
    // require('./../services/passport/passport');

    // ! cookie parser
    app.use(cookieParser())

    // ! Body Parser 
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // ! flash
    app.use(flash());

    // ! session
    // app.use(session({
    //     secret: process.env.SESSION_SECRET || "test",
    //     resave: false,
    //     saveUninitialized: false,
    //     unset: "destroy",
    //     store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
    // }))
    // !passport
    // app.use(passport.initialize());
    // app.use(passport.session());


    // !VIEW ENGINE
    app.set("view engine", "ejs");
    app.set("views", "views");
    app.set("layout", "./layouts/mainLayout.ejs");
    app.use(expressLayouts);
    app.set("layout extractScripts", true)

    // !Public Routes
    app.use(express.static(path.join(__dirname, "../../public")))
} 