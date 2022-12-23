import mongoose from "mongoose";

const ImageSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            data: Buffer,
            contentType: String,
        }
    }
)
const ImageModel = mongoose.model("Image", ImageSchema);

export default ImageModel;