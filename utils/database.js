import mongoose from "mongoose";
import { setServers } from "node:dns/promises";

setServers(["1.1.1.1", "8.8.8.8"]);

let isConnented = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnented) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
        })

        isConnented = true;

        console.log("MongoDB connected")
    } catch (error) {
        console.log("MongoDB error: ", error)
    }
}