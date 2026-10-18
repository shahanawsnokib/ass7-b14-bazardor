import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";


const mongoUri = process.env.MONGODB_API;

if (!mongoUri) {
  throw new Error(
    "MONGODB_API is required. Set it in the environment used to run or build the app.",
  );
}

const client = new MongoClient(mongoUri);
const db = client.db("bazar-dor");

export const auth = betterAuth({
emailAndPassword: { 
    enabled: true, 
  },  socialProviders: {
        github: { 
            clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID , 
            clientSecret: process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET, 
        },
                google: { 
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID, 
            clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET, 
        }, 
 
    },
  database: mongodbAdapter(db, {
    client,
  }),
});