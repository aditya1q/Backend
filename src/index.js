import connectDB from './db/index.js';
import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})

connectDB();

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