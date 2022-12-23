import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        age: {
            type: Number,
        },
        image: {
            data: Buffer,
            type: String,
        }
    },
    {timestamps: true}
)
const User = mongoose.model("user", UserSchema);

export default User;