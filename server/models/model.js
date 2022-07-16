import mongoose from "mongoose"

const ImageSchema = new mongoose.Schema({
    name:String,
    description:String,
    profile:{
        type:String,
        default:"def.png"
    }
},
{
    timestamps:true
}
)
    

export const imgSchema = mongoose.model("imgSchema",ImageSchema)