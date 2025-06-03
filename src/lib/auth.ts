import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db";
import * as schema from "@/db/schema"; // Adjust the import path as necessary

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "pg" or "mysql"
    usePlural: true, // Use plural table names
    schema, // Your Drizzle schema
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  user: {
    modelName: "usersTable", // Name of the user model
  },
  session: {
    modelName: "sessionsTable", // Name of the session model
  },
  account: {
    modelName: "accountsTable", // Name of the account model
  },
  verification: {
    modelName: "verificationsTable",
  },
  emailAndPassword: {
    enabled: true, // Enable email and password authentication
  },
});
