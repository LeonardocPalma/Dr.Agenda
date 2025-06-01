import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "pg" or "mysql"
    usePlural: true, // Use plural table names
  }),
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
});
