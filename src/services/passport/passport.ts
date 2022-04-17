// import * as passport from "passport";
// import { Strategy } from "passport-local";
// import * as bcrypt from "bcrypt"

// const User = require('../src/components/user/model/User');

// passport.use(
//     new Strategy({ usernameField: "email" }, async (email, password, done) => {
//         try {
//             const user = await User.findOne({ email });
//             if (!user) {
//                 return done(null, false, {
//                     message: "شما ثبت نام نکرده اید"
//                 });
//             }
//             const isMatch = await bcrypt.compare(password, user.password);
//             if (isMatch) {
//                 return done(null, user); //req.user
//             } else {
//                 return done(null, false, {
//                     message: " پست الکترونیک یا کلمه عبور صحیح نمی باشد"
//                 });
//             }
//         } catch (err) {
//             console.log(err);
//         }
//     })
// );

// passport.serializeUser((user, done) => {
//     done(null, user);
// });

// passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => {
//         done(err, user);
//     });
// });