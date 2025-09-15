require("dotenv").config(); 

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;


const cors = require("cors");
app.use(cors());

const Url = require("./models/Url");

// Middleware first
app.use(express.json());

// MongoDB Connection
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDb Connected Successfully"))
    .catch(err => console.log("MongoDB connection error", err));

// Routes
app.get("/", (req, res) => {
    res.send("Hey bro! Server is running successfully... Yippy!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
});

app.post("/api/shorten", async (req, res) => {
    const { longUrl, shortUrl } = req.body;

    if (!longUrl || !shortUrl) {
        return res.status(400).json({ error: "Both URLs required" });
    }

    const exist = await Url.findOne({ shortUrl })
    if (exist) {
        return res.status(400).json({ message: "Short URL Already exists" });
    }

    const newUrl = new Url({ longUrl, shortUrl });
    await newUrl.save(); // this writes to MongoDB

    res.json({ message: "URL received", longUrl, shortUrl });
});

app.get("/:shortUrl", async (req, res) => {
    const { shortUrl } = req.params;
    try {
        const urlDoc = await Url.findOne({ shortUrl });

        if (!urlDoc) {
            return res.status(404).json({ error: "Short URL not found" });
        }
        // Redirect to original long URL
        return res.redirect(urlDoc.longUrl);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// Server
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
