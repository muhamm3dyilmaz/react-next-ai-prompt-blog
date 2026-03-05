import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json();

    try {
        // Connect to DB
        await connectToDB();

        // Object
        const newPrompt = new Prompt({
            creator: userId,
            prompt: prompt,
            tag: tag
        });

        // Save object to DB
        await newPrompt.save();

        // Response
        return new Response(
            JSON.stringify(newPrompt),
            { status: 201 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify("Failed to create a new prompt...!"),
            { status: 500 }
        );
    }
}