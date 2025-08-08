import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    try {
        const { url, shorturl } = await req.json();

        // Validation
        if (!url || !shorturl) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: "Both URL and short name are required",
                }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const client = await clientPromise;
        const db = client.db("trimurl");
        const collection = db.collection("url");

        // Check if shorturl already exists
        const exists = await collection.findOne({ shorturl });
        if (exists) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: "Short URL already exists. Please choose another.",
                }),
                { status: 409, headers: { "Content-Type": "application/json" } }
            );
        }

        // Save the short URL
        await collection.insertOne({ shorturl, url });

        return new Response(
            JSON.stringify({
                success: true,
                message: "Short URL generated successfully",
            }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error creating short URL:", error);
        return new Response(
            JSON.stringify({
                success: false,
                message: "Internal server error",
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
