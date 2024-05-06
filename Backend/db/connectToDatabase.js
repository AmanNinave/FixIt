import mongoose from "mongoose";

const connectToDatabase = async () =>{
    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION_URL);
        console.log("connected to database");
    } catch (error) {
        console.log("Database connection failed");
    }
}

export default connectToDatabase;