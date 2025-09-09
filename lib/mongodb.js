// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

// Connection options – safe defaults for Vercel + Atlas
const options = {
  ssl: true, // ensure TLS
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Reuse connection in dev (avoid multiple connections on hot reload)
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, just create a new client once
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
