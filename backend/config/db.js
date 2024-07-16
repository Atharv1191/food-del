import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectWithDb = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        
    })
    .then(console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Facing Connection Issues");
        console.log(error);
        process.exit(1);
    } ) 
};

export {connectWithDb}