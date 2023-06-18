import Suit from "../../../../models/history";
import { connectToDB } from "../../../../utils/database";

export const POST = async (request) => {
    console.log("youareawesome")
    const { userId, query, fromd, tilld } = await request.json();

    try {
        await connectToDB();
        const newSuit = new Suit({ creator: userId, query, fromd, tilld });

        await newSuit.save();
        return new Response(JSON.stringify(newSuit), { status: 201 })
    } catch (error) {
        console.log("yougetanerror",error)
        return new Response("Failed to create a new suit", { status: 500 });
    }
}