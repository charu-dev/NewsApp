import favFeed from "../../../../models/favFeed";
import { connectToDB } from "../../../../utils/database";

export const POST = async (request) => {
    console.log("youareawesomecharuboss")
    const { feed } = await request.json();

    try {
        await connectToDB();
        const newfavFeed = new favFeed({ feed });

        await newfavFeed.save();
        return new Response(JSON.stringify(newfavFeed), { status: 201 })
    } catch (error) {
        console.log("yougetanerror",error)
        return new Response("Failed to create a new favFeed", { status: 500 });
    }
}