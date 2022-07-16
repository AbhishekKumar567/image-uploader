
import mongoose from "mongoose"

export const Connection = () => {

    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(() => {
        console.log("connection established")
    }).catch((e) => {
        console.log("No connection established")
    })
}