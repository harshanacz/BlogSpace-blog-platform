import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI!, {
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error(`Error: ${String(error)}`);
        }
        process.exit(1);
    }
}
