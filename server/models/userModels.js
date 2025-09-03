import {Schema, model} from "mongoose"

const userSchema = new Schema({
    email: {type: String, trim: true, unique: true, required: true, index: true, lowercase: true},
    username: {type: String, required: true, trim: true},
    state: {type: String, required: true, trim: true},
    cellnumber: {type: String, required: true, },
    password: {type: String, required: true, select: false},
    admin: {type: Boolean, default: false},
    agreed: {type: Boolean, required: true}
},
 {
    timestamp: true
 }
)

const userModel = model("Users", userSchema)

export default userModel;