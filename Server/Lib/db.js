import mongoose from "mongoose";

export const connect = async() =>{
    try{
        await mongoose.connect(process.env.DB_URL,{
            dbName:"Hr-Manager"
        });
        console.log("MogoDB connect successfully");
        
    }catch(error){
        console.log(error.message);
        process.exit(1)
        
    }
};