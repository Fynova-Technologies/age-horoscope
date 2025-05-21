# Astral Insight - Astrology Web Application

## Overview

Astral Insight is a comprehensive astrology web application that allows users to calculate their exact age, explore zodiac sign profiles, check compatibility between signs, and view daily horoscopes. The application is built with a modern full-stack architecture using React, TypeScript, TailwindCSS, and Drizzle ORM with PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built with React and TypeScript, using the following key technologies:

- **React**: Core UI library
- **TailwindCSS**: Utility-first CSS framework for styling
- **Shadcn UI**: Component library based on Radix UI primitives
- **Framer Motion**: For animations and transitions
- **React Query**: For data fetching and state management
- **Wouter**: Lightweight routing library

The application uses a component-based architecture with a clear separation between UI components, feature-specific components, and pages. The UI follows a custom cosmic-themed design system with light and dark mode support.

### Backend Architecture

The backend is built with Express.js and uses Drizzle ORM for database operations:

- **Express.js**: Web server framework
- **Drizzle ORM**: Database ORM for PostgreSQL
- **Zod**: Schema validation library

The server follows a RESTful API design pattern and provides endpoints for user management, favorites, compatibility history, and age calculations.

### Data Flow

1. Client makes requests to the backend API endpoints
2. Server validates incoming data using Zod schemas
3. Server processes requests and interacts with the database using Drizzle ORM
4. Server returns responses to the client
5. Client updates the UI based on the received data

For certain features like horoscope data and zodiac sign information, the application uses client-side data stored in the `lib` directory.

## Key Components

### Frontend Components

1. **Page Components**:
   - `Home.tsx`: Main page that integrates all feature components
   - `NotFound.tsx`: 404 error page

2. **Layout Components**:
   - `Navbar.tsx`: Navigation bar with links and theme toggle
   - `Footer.tsx`: Site footer with links and social media
   - `HeroSection.tsx`: Landing section with main call-to-action

3. **Feature Components**:
   - **Age Calculator**: Components for inputting birth data and displaying age results
   - **Zodiac Profiles**: Grid of zodiac signs and detailed profile cards
   - **Compatibility**: Form for selecting signs and displaying compatibility results
   - **Horoscope**: Components for selecting signs and displaying daily horoscopes

4. **UI Components**:
   - Collection of Shadcn UI components like buttons, cards, inputs, etc.
   - `ThemeProvider.tsx`: Context provider for theme management

### Backend Components

1. **API Routes**:
   - User routes: Registration, login, profile retrieval
   - Favorites routes: Save and retrieve favorite zodiac signs
   - Compatibility routes: Store and retrieve compatibility checks
   - Age calculation routes: Store and retrieve age calculations

2. **Database Models**:
   - Users: User account information
   - Favorites: Saved zodiac signs
   - CompatibilityHistory: Record of compatibility checks
   - AgeCalculations: Record of age calculations

3. **Services**:
   - Storage service: Interface for database operations

## Data Flow

1. **Age Calculation Flow**:
   - User enters birth date and time
   - Frontend calculates age details and zodiac sign
   - If user is logged in, result is saved to database via API
   - Results are displayed to user

2. **Zodiac Profile Flow**:
   - User selects a zodiac sign from the grid
   - Frontend fetches zodiac data from client-side library
   - Profile information is displayed to user
   - Logged in users can save favorite signs via API

3. **Compatibility Flow**:
   - User selects two zodiac signs
   - Frontend calculates compatibility using client-side library
   - If user is logged in, check is saved to database via API
   - Compatibility results are displayed to user

4. **Horoscope Flow**:
   - User selects their zodiac sign
   - Frontend fetches horoscope data from client-side library
   - Daily horoscope is displayed to user

## External Dependencies

### Frontend Dependencies

- **React ecosystem**: react, react-dom, react-hook-form
- **UI Components**: @radix-ui components, class-variance-authority, clsx
- **Data Management**: @tanstack/react-query
- **Animation**: framer-motion
- **Date Handling**: date-fns

### Backend Dependencies

- **Server**: express
- **Database**: drizzle-orm, @neondatabase/serverless
- **Validation**: zod, drizzle-zod

## Deployment Strategy

The application is configured for deployment on Replit with the following strategy:

1. **Development Mode**:
   - Run with `npm run dev` which uses tsx to execute the server with TypeScript
   - Serves the React app through Vite's development server
   - Provides hot module replacement for frontend changes

2. **Production Mode**:
   - Build process: `npm run build`
     - Frontend: Vite bundles React app to static files
     - Backend: esbuild bundles server files
   - Run with `npm run start` which executes the bundled server
   - Serves the pre-built static frontend files

3. **Database**:
   - Uses PostgreSQL provided by Replit
   - Connect using environment variables
   - Schema management through Drizzle ORM

The deployment is configured in the `.replit` file with appropriate ports and environment settings. The application is set up for auto-scaling deployment on Replit.

## Getting Started

1. Make sure the PostgreSQL database is properly set up in the Replit environment
2. Run `npm run db:push` to create the database tables according to the schema
3. Run `npm run dev` to start the development server
4. Navigate to the application in the Replit webview

When making changes to the database schema, update the schema in `shared/schema.ts` and run `npm run db:push` to apply the changes.