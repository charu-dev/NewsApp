import favFeed from "../../../../models/favFeed";
import { connectToDB } from "../../../../utils/database";

export const POST = async (request) => {
    console.log("youareawesomecharuboss")
    const { feed } = await request.json();
    const url=feed.url
    // let hahaexist=false;
    try {
        await connectToDB();
        const feedexist= await favFeed.find( {"feed.url": url}).then((existingfeed)=>{console.log("han yr mil gaya");}).catch((err)=>{
            console.log("sorry boss yeh to naya hai ");
        });
        if(feedexist){
            console.log("yr yep ",feedexist.feed.url,url)
            return 
        }
        else{
            const newfavFeed = new favFeed({ feed });
        

        await newfavFeed.save();
        return new Response(JSON.stringify(newfavFeed), { status: 201 })
        }
    } catch (error) {
        console.log("yougetanerror",error)
        return new Response("Failed to create a new favFeed", { status: 500 });
    }
}