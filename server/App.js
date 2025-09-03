import dotenv from "dotenv"

dotenv.config();


import express from "express"
import cors from "cors"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import appController from "./controller/appController.js"




const mongoUri = process.env.MONGODB_URI
const PORT = process.env.SERVER_PORT || 5000
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';

const app = express()

app.use(helmet())

app.use(cors({
  origin: CLIENT_ORIGIN,
  credentials: true
}));

app.use(express.json({limit: '1mb'}))

app.use(cookieParser(process.env.JWT_SECRET))



const startServer = async () => {

    if(!mongoUri) {
        console.error("MONGO_URI is missing");
        process.exit(1);
    }

    try { 
      const connect = await mongoose.connect(mongoUri)

      if(connect) {
        appController(app)

          app.listen(PORT, () => {
        console.log("Server is running", PORT)
      })
      }

    
    } catch (err) {
        console.error("error loading server", err.message || err);
        process.exit(1);
    }
};



startServer();