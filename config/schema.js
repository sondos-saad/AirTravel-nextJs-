import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  userId: varchar({length: 255}).notNull().unique(),
  role:varchar().notNull().default("user"),
  email: varchar({ length: 255 }).notNull().unique(),
});
