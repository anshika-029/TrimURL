import clientPromise from "@/lib/mongodb"


export async function POST(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("trimurl");
    const collection = db.collection("url");

    // Check if shorturl already exists
    const shortUrlExists = await collection.findOne({shorturl:body.shorturl});
    if(shortUrlExists){
        return Response.json({success:false, error:true, message:"Short URL already exists"});
    }


    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl,
    })

    return Response.json({ success: true, error: false, message: "URL shortened successfully" });
}