import { Router, type IRouter } from "express";
import { eq, sql } from "drizzle-orm";
import { db, addressesTable } from "@workspace/db";
import { requireAuth } from "../middlewares/auth";
import { randomUUID } from "crypto";

const router: IRouter = Router();

function formatAddress(a: typeof addressesTable.$inferSelect) {
  return {
    id: a.id, uniqueCode: a.uniqueCode, name: a.name, type: a.type,
    gpsLat: Number(a.gpsLat), gpsLng: Number(a.gpsLng),
    fullAddress: a.fullAddress, contactPerson: a.contactPerson ?? null,
    contactNumber: a.contactNumber ?? null, accessHours: a.accessHours ?? null,
    notes: a.notes ?? null, beatId: a.beatId ?? null, officeId: a.officeId,
    createdBy: a.createdBy, createdAt: a.createdAt.toISOString(),
    updatedAt: a.updatedAt.toISOString(),
  };
}

router.get("/addresses", requireAuth, async (req, res): Promise<void> => {
  const { beatId, officeId, q, type } = req.query as Record<string, string | undefined>;
  let addresses = await db.select().from(addressesTable);
  if (beatId) addresses = addresses.filter(a => a.beatId === beatId);
  if (officeId) addresses = addresses.filter(a => a.officeId === officeId);
  if (type) addresses = addresses.filter(a => a.type === type);
  if (q) {
    const lower = q.toLowerCase();
    addresses = addresses.filter(a =>
      a.name.toLowerCase().includes(lower) ||
      a.fullAddress.toLowerCase().includes(lower) ||
      a.uniqueCode.toLowerCase().includes(lower)
    );
  }
  res.json(addresses.map(formatAddress));
});

router.post("/addresses", requireAuth, async (req, res): Promise<void> => {
  const user = req.user!;
  const { name, type, gpsLat, gpsLng, fullAddress, contactPerson, contactNumber, accessHours, notes, beatId, officeId } = req.body;
  if (!name || !type || gpsLat === undefined || gpsLng === undefined || !fullAddress || !officeId) {
    res.status(400).json({ error: "bad_request", message: "Missing required fields" });
    return;
  }
  const uniqueCode = `ADDR-${Date.now()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  const [address] = await db.insert(addressesTable).values({
    uniqueCode, name, type, gpsLat: String(gpsLat), gpsLng: String(gpsLng),
    fullAddress, contactPerson: contactPerson ?? null,
    contactNumber: contactNumber ?? null, accessHours: accessHours ?? null,
    notes: notes ?? null, beatId: beatId ?? null, officeId,
    createdBy: user.userId,
  }).returning();
  res.status(201).json(formatAddress(address));
});

router.put("/addresses/:id", requireAuth, async (req, res): Promise<void> => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const { name, type, gpsLat, gpsLng, fullAddress, contactPerson, contactNumber, accessHours, notes } = req.body;
  const updates: Record<string, unknown> = {};
  if (name !== undefined) updates.name = name;
  if (type !== undefined) updates.type = type;
  if (gpsLat !== undefined) updates.gpsLat = String(gpsLat);
  if (gpsLng !== undefined) updates.gpsLng = String(gpsLng);
  if (fullAddress !== undefined) updates.fullAddress = fullAddress;
  if (contactPerson !== undefined) updates.contactPerson = contactPerson;
  if (contactNumber !== undefined) updates.contactNumber = contactNumber;
  if (accessHours !== undefined) updates.accessHours = accessHours;
  if (notes !== undefined) updates.notes = notes;
  const [address] = await db.update(addressesTable).set(updates).where(eq(addressesTable.id, id)).returning();
  if (!address) { res.status(404).json({ error: "not_found", message: "Address not found" }); return; }
  res.json(formatAddress(address));
});

export default router;
