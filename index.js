import express from "express";
import bodyParser from "body-parser";
import mongoose, { Mongoose } from "mongoose";
import cors from "cors"
import router from "./routes/posts.js";

const app = express()
app.use(cors())
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use('/posts',router)

const MONGO_URL = "mongodb+srv://javascript:40854085@cluster0.oynhj.mongodb.net/memories"

const PORT = process.env.PORT || 5000
mongoose.connect(MONGO_URL, {useNewUrlParser : true,useUnifiedTopology:true}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`);
    })
}).catch((err)=>{
    console.log(err)
})
// mongoose.set('useFindAndModify',false)