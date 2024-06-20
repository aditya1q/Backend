import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'
import express from "express";
import dotenv from 'dotenv';

dotenv.config({
  path:'/env'
})
// const DB_NAME = "aditya";

const app = express();
const db_uri = process.env.MONGODB_URI;
console.log(db_uri);
const port = process.env.PORT;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(connectionInstance.connection.host);
  } catch (error) {
    console.log("Error in connecting to database", error);
    process.exit(1)
  }
};

export default connectDB

// second approach

// i'm using ; here because if anything run before this function so it will stop there and we can safely run our IIFE function
// ;(async () => {
//     try{
//         await mongoose.connect(`${process}`)
//         app.on("error", () => {
//             console.log("Error connecting to MongoDB");
//         })
//         app.listen(port, () => {
//             console.log(`Server is running on port ${port}`)
//         })
//     }
//     catch(error){
//         console.error("Error", error);
//     }
// })();