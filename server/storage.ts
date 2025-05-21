import { 
  User, InsertUser, 
  Favorite, InsertFavorite, 
  CompatibilityHistory, InsertCompatibilityHistory,
  AgeCalculation, InsertAgeCalculation 
} from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Favorites operations
  createFavorite(favorite: InsertFavorite): Promise<Favorite>;
  getUserFavorites(userId: number): Promise<Favorite[]>;
  
  // Compatibility history operations
  createCompatibilityHistory(history: InsertCompatibilityHistory): Promise<CompatibilityHistory>;
  getUserCompatibilityHistory(userId: number): Promise<CompatibilityHistory[]>;
  
  // Age calculation history operations
  createAgeCalculation(calculation: InsertAgeCalculation): Promise<AgeCalculation>;
  getUserAgeCalculations(userId: number): Promise<AgeCalculation[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private favorites: Map<number, Favorite>;
  private compatibilityHistory: Map<number, CompatibilityHistory>;
  private ageCalculations: Map<number, AgeCalculation>;
  
  private userIdCounter: number;
  private favoriteIdCounter: number;
  private compatibilityHistoryIdCounter: number;
  private ageCalculationIdCounter: number;

  constructor() {
    this.users = new Map();
    this.favorites = new Map();
    this.compatibilityHistory = new Map();
    this.ageCalculations = new Map();
    
    this.userIdCounter = 1;
    this.favoriteIdCounter = 1;
    this.compatibilityHistoryIdCounter = 1;
    this.ageCalculationIdCounter = 1;
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const createdAt = new Date();
    
    const user: User = { 
      ...insertUser, 
      id, 
      createdAt 
    };
    
    this.users.set(id, user);
    return user;
  }

  // Favorites operations
  async createFavorite(insertFavorite: InsertFavorite): Promise<Favorite> {
    const id = this.favoriteIdCounter++;
    const createdAt = new Date();
    
    const favorite: Favorite = {
      ...insertFavorite,
      id,
      createdAt
    };
    
    this.favorites.set(id, favorite);
    return favorite;
  }

  async getUserFavorites(userId: number): Promise<Favorite[]> {
    return Array.from(this.favorites.values()).filter(
      (favorite) => favorite.userId === userId
    );
  }

  // Compatibility history operations
  async createCompatibilityHistory(insertHistory: InsertCompatibilityHistory): Promise<CompatibilityHistory> {
    const id = this.compatibilityHistoryIdCounter++;
    const createdAt = new Date();
    
    const history: CompatibilityHistory = {
      ...insertHistory,
      id,
      createdAt
    };
    
    this.compatibilityHistory.set(id, history);
    return history;
  }

  async getUserCompatibilityHistory(userId: number): Promise<CompatibilityHistory[]> {
    return Array.from(this.compatibilityHistory.values()).filter(
      (history) => history.userId === userId
    );
  }

  // Age calculation history operations
  async createAgeCalculation(insertCalculation: InsertAgeCalculation): Promise<AgeCalculation> {
    const id = this.ageCalculationIdCounter++;
    const createdAt = new Date();
    
    const calculation: AgeCalculation = {
      ...insertCalculation,
      id,
      createdAt
    };
    
    this.ageCalculations.set(id, calculation);
    return calculation;
  }

  async getUserAgeCalculations(userId: number): Promise<AgeCalculation[]> {
    return Array.from(this.ageCalculations.values()).filter(
      (calculation) => calculation.userId === userId
    );
  }
}

export const storage = new MemStorage();
