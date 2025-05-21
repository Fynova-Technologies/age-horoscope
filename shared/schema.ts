import { pgTable, text, serial, integer, date, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  birthDate: date("birth_date"),
  birthTime: text("birth_time"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Favorites table for saved zodiac signs and horoscopes
export const favorites = pgTable("favorites", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  zodiacSign: text("zodiac_sign").notNull(),
  isFavorite: boolean("is_favorite").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Compatibility history
export const compatibilityHistory = pgTable("compatibility_history", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  firstSign: text("first_sign").notNull(),
  secondSign: text("second_sign").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Age calculation history
export const ageCalculations = pgTable("age_calculations", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  birthDate: date("birth_date").notNull(),
  birthTime: text("birth_time"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Create insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  birthDate: true,
  birthTime: true,
});

export const insertFavoriteSchema = createInsertSchema(favorites).pick({
  userId: true,
  zodiacSign: true,
  isFavorite: true,
});

export const insertCompatibilityHistorySchema = createInsertSchema(compatibilityHistory).pick({
  userId: true,
  firstSign: true,
  secondSign: true,
});

export const insertAgeCalculationSchema = createInsertSchema(ageCalculations).pick({
  userId: true,
  birthDate: true,
  birthTime: true,
});

// Create types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertFavorite = z.infer<typeof insertFavoriteSchema>;
export type Favorite = typeof favorites.$inferSelect;

export type InsertCompatibilityHistory = z.infer<typeof insertCompatibilityHistorySchema>;
export type CompatibilityHistory = typeof compatibilityHistory.$inferSelect;

export type InsertAgeCalculation = z.infer<typeof insertAgeCalculationSchema>;
export type AgeCalculation = typeof ageCalculations.$inferSelect;
