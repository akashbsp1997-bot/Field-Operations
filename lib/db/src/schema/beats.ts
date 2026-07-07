import { pgTable, text, uuid, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { officesTable } from "./offices";
import { usersTable } from "./users";

export const beatsTable = pgTable("beats", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  officeId: uuid("office_id").notNull().references(() => officesTable.id, { onDelete: "cascade" }),
  operatorId: uuid("operator_id").references(() => usersTable.id, { onDelete: "set null" }),
  polygonGeoJson: json("polygon_geo_json"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const insertBeatSchema = createInsertSchema(beatsTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertBeat = z.infer<typeof insertBeatSchema>;
export type Beat = typeof beatsTable.$inferSelect;

export const addressesTable = pgTable("addresses", {
  id: uuid("id").primaryKey().defaultRandom(),
  uniqueCode: text("unique_code").notNull().unique(),
  name: text("name").notNull(),
  type: text("type").notNull().default("residential"),
  gpsLat: text("gps_lat").notNull(),
  gpsLng: text("gps_lng").notNull(),
  fullAddress: text("full_address").notNull(),
  contactPerson: text("contact_person"),
  contactNumber: text("contact_number"),
  accessHours: text("access_hours"),
  notes: text("notes"),
  beatId: uuid("beat_id").references(() => beatsTable.id, { onDelete: "set null" }),
  officeId: uuid("office_id").notNull().references(() => officesTable.id, { onDelete: "cascade" }),
  createdBy: uuid("created_by").notNull().references(() => usersTable.id),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const insertAddressSchema = createInsertSchema(addressesTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertAddress = z.infer<typeof insertAddressSchema>;
export type Address = typeof addressesTable.$inferSelect;
