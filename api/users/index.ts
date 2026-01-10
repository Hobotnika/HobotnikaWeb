import type { VercelRequest, VercelResponse } from "@vercel/node";
import { storage } from "../../server/storage";
import { insertUserSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    if (req.method === "POST") {
      // Create a new user
      const validation = insertUserSchema.safeParse(req.body);

      if (!validation.success) {
        const validationError = fromZodError(validation.error);
        return res.status(400).json({ error: validationError.message });
      }

      // Check if user already exists
      const existingUser = await storage.getUserByUsername(validation.data.username);
      if (existingUser) {
        return res.status(409).json({ error: "Username already exists" });
      }

      const user = await storage.createUser(validation.data);

      // Don't return password in response
      const { password, ...userWithoutPassword } = user;

      return res.status(201).json(userWithoutPassword);
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Error in /api/users:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
