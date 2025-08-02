import clientPromise from "@/lib/mongodb"


export async function POST(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("trimurl");
    const collection = db.collection("url");


    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl,
    })

    return Response.json({ success: true, error: false, message: "URL shortened successfully" });
}