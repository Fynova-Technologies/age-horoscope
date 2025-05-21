import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertFavoriteSchema, insertCompatibilityHistorySchema, insertAgeCalculationSchema } from "@shared/schema";
import { zodiacSigns } from "../client/src/lib/zodiac-data";
import { getHoroscope } from "../client/src/lib/horoscope-data";

export async function registerRoutes(app: Express): Promise<Server> {
  // User routes
  app.post("/api/users", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      const newUser = await storage.createUser(validatedData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: "Invalid user data", error: String(error) });
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Don't return the password
      const { password, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving user", error: String(error) });
    }
  });

  // Favorites routes
  app.post("/api/favorites", async (req, res) => {
    try {
      const validatedData = insertFavoriteSchema.parse(req.body);
      const newFavorite = await storage.createFavorite(validatedData);
      res.status(201).json(newFavorite);
    } catch (error) {
      res.status(400).json({ message: "Invalid favorite data", error: String(error) });
    }
  });

  app.get("/api/users/:userId/favorites", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const favorites = await storage.getUserFavorites(userId);
      res.json(favorites);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving favorites", error: String(error) });
    }
  });

  // Compatibility history routes
  app.post("/api/compatibility-history", async (req, res) => {
    try {
      const validatedData = insertCompatibilityHistorySchema.parse(req.body);
      const newHistory = await storage.createCompatibilityHistory(validatedData);
      res.status(201).json(newHistory);
    } catch (error) {
      res.status(400).json({ message: "Invalid compatibility history data", error: String(error) });
    }
  });

  app.get("/api/users/:userId/compatibility-history", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const history = await storage.getUserCompatibilityHistory(userId);
      res.json(history);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving compatibility history", error: String(error) });
    }
  });

  // Age calculation history routes
  app.post("/api/age-calculations", async (req, res) => {
    try {
      const validatedData = insertAgeCalculationSchema.parse(req.body);
      const newCalculation = await storage.createAgeCalculation(validatedData);
      res.status(201).json(newCalculation);
    } catch (error) {
      res.status(400).json({ message: "Invalid age calculation data", error: String(error) });
    }
  });

  app.get("/api/users/:userId/age-calculations", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const calculations = await storage.getUserAgeCalculations(userId);
      res.json(calculations);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving age calculations", error: String(error) });
    }
  });

  // Zodiac data routes
  app.get("/api/zodiac-signs", (req, res) => {
    res.json(zodiacSigns);
  });

  app.get("/api/zodiac-signs/:id", (req, res) => {
    const sign = zodiacSigns.find(s => s.id === req.params.id);
    
    if (!sign) {
      return res.status(404).json({ message: "Zodiac sign not found" });
    }
    
    res.json(sign);
  });

  // Horoscope routes
  app.get("/api/horoscopes/:sign", (req, res) => {
    try {
      const sign = req.params.sign;
      const validSign = zodiacSigns.find(s => s.id === sign);
      
      if (!validSign) {
        return res.status(404).json({ message: "Invalid zodiac sign" });
      }
      
      const horoscope = getHoroscope(sign);
      res.json(horoscope);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving horoscope", error: String(error) });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
