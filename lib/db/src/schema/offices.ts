import { pgTable, text, uuid, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { usersTable } from "./users";

export const officesTable = pgTable("offices", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  code: text("code").notNull().unique(),
  address: text("address").notNull(),
  district: text("district").notNull(),
  state: text("state").notNull(),
  pincode: text("pincode").notNull(),
  phone: text("phone"),
  polygonGeoJson: json("polygon_geo_json"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const insertOfficeSchema = createInsertSchema(officesTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertOffice = z.infer<typeof insertOfficeSchema>;
export type Office = typeof officesTable.$inferSelect;

// Many-to-many: admins to offices
export const userOfficesTable = pgTable("user_offices", {
  userId: uuid("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  officeId: uuid("office_id").notNull().references(() => officesTable.id, { onDelete: "cascade" }),
});
