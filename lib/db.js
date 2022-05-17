import { MongoClient } from 'mongodb';

const dbURI = process.env.MY_MONGO_URI;

export async function connectToDatabase() {
    const client = await MongoClient.connect(dbURI);

    return client;
}

