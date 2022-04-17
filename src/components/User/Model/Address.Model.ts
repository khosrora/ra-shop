import { Schema, model } from "mongoose";



const addressSchema: Schema = new Schema({
    city: { type: String, required: true },
    street: { type: String, required: true },
    postalcode: { type: String, required: true },
    plate: { type: String },
    reciver: { type: String, required: true },
});


export default model<IAddress>("Address", addressSchema);