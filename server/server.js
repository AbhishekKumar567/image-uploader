
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { router } from "./routes/route.js"
import fileUpload from "express-fileupload"
import path from 'path'
import {v2 as cloudinary} from 'cloudinary'

const __dirname = path.resolve()
dotenv.config()
//components
import { Connection } from "./config/conn.js"

const app = express()
app.use(cors())

app.use(express.urlencoded({extended:true}))
//app.use(bodyParser.json({extended:true}))
app.use(express.json())


const port = process.env.PORT || 4000

Connection()


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET

})

app.use(
    fileUpload({
        debug: true,
        useTempFiles: true,
        tempFileDir: path.join(__dirname, "./tmp"),
      })
)

app.use(express.static("uploads"))
app.use('/images',router)

app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})