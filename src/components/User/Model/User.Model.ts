import { Schema, model } from "mongoose";
import addressSchema from "./Address.Model";
import IUser from "./IUser";


const userSchema: Schema = new Schema({
    username: { type: String, required: true, trim: true },
    firstname: { type: String, trim: true },
    lastname: { type: String, trim: true },
    email: { type: String, required: true },
    phonenumber: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: [addressSchema] },
    cart: { type: [] },
})


export default model<IUser>("User", userSchema);