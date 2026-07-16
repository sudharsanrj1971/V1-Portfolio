import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.accessToken || req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Authentication required" });
  try { req.user = jwt.verify(token, process.env.JWT_SECRET || "development-secret"); return next(); } catch { return res.status(401).json({ error: "Invalid token" }); }
}
