import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req) => {
    try {
        // Connect to DB
        await connectToDB();

        // Objects
        const prompts = await Prompt.find({}).populate('creator');

        // Response
        return new Response(
            JSON.stringify(prompts),
            { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify("Failed to fetch prompts...!"),
            { status: 500 }
        );
    }
}