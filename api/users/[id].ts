import type { VercelRequest, VercelResponse } from "@vercel/node";
import { storage } from "../../server/storage";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const { id } = req.query;

    if (typeof id !== "string") {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    if (req.method === "GET") {
      const user = await storage.getUser(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Don't return password in response
      const { password, ...userWithoutPassword } = user;

      return res.status(200).json(userWithoutPassword);
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error(`Error in /api/users/${req.query.id}:`, error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
