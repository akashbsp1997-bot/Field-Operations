import { Router, type IRouter } from "express";
import { eq, and, gte, lt } from "drizzle-orm";
import { db, visitsTable, userOfficesTable } from "@workspace/db";
import { requireAuth } from "../middlewares/auth";

const router: IRouter = Router();

function formatVisit(v: typeof visitsTable.$inferSelect) {
  return {
    id: v.id, operatorId: v.operatorId, officeId: v.officeId,
    beatId: v.beatId ?? null, addressId: v.addressId ?? null,
    visitType: v.visitType, gpsLat: v.gpsLat, gpsLng: v.gpsLng,
    timestamp: v.visitTimestamp.toISOString(),
    notes: v.notes ?? null, contactNumber: v.contactNumber ?? null,
    isSynced: v.isSynced, createdAt: v.createdAt.toISOString(),
  };
}

router.get("/visits", requireAuth, async (req, res): Promise<void> => {
  const { operatorId, officeId, date, isSynced } = req.query as Record<string, string | undefined>;
  let visits = await db.select().from(visitsTable);
  if (operatorId) visits = visits.filter(v => v.operatorId === operatorId);
  if (officeId) visits = visits.filter(v => v.officeId === officeId);
  if (date) {
    const d = new Date(date);
    const nextDay = new Date(d);
    nextDay.setDate(nextDay.getDate() + 1);
    visits = visits.filter(v => v.visitTimestamp >= d && v.visitTimestamp < nextDay);
  }
  if (isSynced !== undefined) visits = visits.filter(v => v.isSynced === (isSynced === "true"));
  res.json(visits.map(formatVisit));
});

router.post("/visits", requireAuth, async (req, res): Promise<void> => {
  const user = req.user!;
  const { beatId, addressId, visitType, gpsLat, gpsLng, timestamp, notes, contactNumber } = req.body;
  if (!visitType || gpsLat === undefined || gpsLng === undefined || !timestamp) {
    res.status(400).json({ error: "bad_request", message: "Missing required fields" });
    return;
  }
  const officeLinks = await db
    .select({ officeId: userOfficesTable.officeId })
    .from(userOfficesTable)
    .where(eq(userOfficesTable.userId, user.userId));
  const officeId = officeLinks[0]?.officeId;
  if (!officeId) {
    res.status(400).json({ error: "bad_request", message: "Operator has no assigned office" });
    return;
  }
  const [visit] = await db.insert(visitsTable).values({
    operatorId: user.userId, officeId,
    beatId: beatId ?? null, addressId: addressId ?? null,
    visitType, gpsLat: Number(gpsLat), gpsLng: Number(gpsLng),
    visitTimestamp: new Date(timestamp),
    notes: notes ?? null, contactNumber: contactNumber ?? null,
    isSynced: true,
  }).returning();
  res.status(201).json(formatVisit(visit));
});

router.put("/visits/:id", requireAuth, async (req, res): Promise<void> => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const { notes, isSynced } = req.body;
  const updates: Record<string, unknown> = {};
  if (notes !== undefined) updates.notes = notes;
  if (isSynced !== undefined) updates.isSynced = isSynced;
  const [visit] = await db.update(visitsTable).set(updates).where(eq(visitsTable.id, id)).returning();
  if (!visit) { res.status(404).json({ error: "not_found", message: "Visit not found" }); return; }
  res.json(formatVisit(visit));
});

export default router;
