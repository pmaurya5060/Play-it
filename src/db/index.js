import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async ()=> {
    try{
        const connectioninstsance=await(mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`))
        console.log("DB connected!! DB host:",connectioninstsance.connection.host)
    }
    catch(error){
        console.log("DB connection error:", error)
        process.exit(1)
    }
}

export default connectDB