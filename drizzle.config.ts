// import { defineConfig } from "drizzle-kit";
// import * as dotenv from "dotenv";

// dotenv.config();

// export default defineConfig({
//   schema: "./app/db/schema.ts", // On dira que ton schema est là
//   out: "./drizzle",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },
// });
import { defineConfig } from "drizzle-kit";
 
export default defineConfig({

  dialect: "postgresql",

  schema: "app/db/schema.ts", // "./app/db/schema.ts", app\db\schema.ts

  out: "/drizzle",

  dbCredentials: {

    url: process.env.DATABASE_URL!,

  },

});