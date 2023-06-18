import Suit from "../../../../models/history";
import { connectToDB } from "../../../../utils/database";

export const GET = async (request, { params }) => {
    console.log("request",request)
    try {
        await connectToDB()
        console.log(params.id)
        const suits = await Suit.findById(params.id).populate("creator")
        console.log("suits",suits)
        if (!suits) return new Response("Prompt Not Found", { status: 404 });
        return new Response(JSON.stringify(suits), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 