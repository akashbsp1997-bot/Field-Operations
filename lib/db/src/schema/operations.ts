import { pgTable, text, uuid, boolean, timestamp, real, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { officesTable } from "./offices";
import { usersTable } from "./users";
import { beatsTable, addressesTable } from "./beats";

export const visitsTable = pgTable("visits", {
  id: uuid("id").primaryKey().defaultRandom(),
  operatorId: uuid("operator_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  officeId: uuid("office_id").notNull().references(() => officesTable.id, { onDelete: "cascade" }),
  beatId: uuid("beat_id").references(() => beatsTable.id, { onDelete: "set null" }),
  addressId: uuid("address_id").references(() => addressesTable.id, { onDelete: "set null" }),
  visitType: text("visit_type").notNull(), // delivery, enquiry, lead, complaint, pickup, business_proposal, beat_update, office_work, verification, money_collection, other
  gpsLat: real("gps_lat").notNull(),
  gpsLng: real("gps_lng").notNull(),
  visitTimestamp: timestamp("visit_timestamp", { withTimezone: true }).notNull(),
  notes: text("notes"),
  contactNumber: text("contact_number"),
  isSynced: boolean("is_synced").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertVisitSchema = createInsertSchema(visitsTable).omit({
  id: true,
  createdAt: true,
});
export type InsertVisit = z.infer<typeof insertVisitSchema>;
export type Visit = typeof visitsTable.$inferSelect;

export const operatorLocationsTable = pgTable("operator_locations", {
  id: uuid("id").primaryKey().defaultRandom(),
  operatorId: uuid("operator_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  gpsLat: real("gps_lat").notNull(),
  gpsLng: real("gps_lng").notNull(),
  batteryLevel: integer("battery_level"),
  isOnline: boolean("is_online").notNull().default(true),
  recordedAt: timestamp("recorded_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertOperatorLocationSchema = createInsertSchema(operatorLocationsTable).omit({
  id: true,
  recordedAt: true,
});
export type InsertOperatorLocation = z.infer<typeof insertOperatorLocationSchema>;
export type OperatorLocation = typeof operatorLocationsTable.$inferSelect;
