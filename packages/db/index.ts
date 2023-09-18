// import { Client } from "@planetscale/database";
// import { drizzle } from "drizzle-orm/planetscale-serverless";

import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import * as auth from "./schema/auth";
import * as post from "./schema/post";

export const schema = { ...auth, ...post };

export { mySqlTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

// {
//   host: "host",
//   user: "user",
//   database: "database",
// }
const connection = await mysql.createConnection(process.env.DATABASE_URL!);

export const db = drizzle(
  connection,
  // new Client({
  //   url: process.env.DATABASE_URL,
  // }).connection(),
  { schema, mode: "default" },
);
