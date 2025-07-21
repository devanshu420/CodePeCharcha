# CodePeCharcha - Hinglish Coding School Website

## Overview

CodePeCharcha is a modern, full-stack web application for a Hinglish-themed coding school. The project uses a monorepo architecture with a React frontend, Express.js backend, and PostgreSQL database. It features a quirky, culturally-rooted design that appeals to the desi developer community.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with hot module replacement for development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system featuring:
  - Dark theme with purple/blue gradient accents
  - Custom CSS variables for consistent theming
  - Google Fonts (Poppins, Inter, Fira Code)
  - Glass morphism effects and animations

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: HTTP server with middleware for logging and error handling
- **Development**: Custom Vite integration for SSR in development
- **Error Handling**: Centralized error middleware with proper status codes

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema**: Shared schema definitions between client and server
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Page Structure
- **Home**: Hero section with Hinglish messaging, features, and newsletter signup
- **Courses**: Product listing with filtering (courses, internships, merch)
- **Product Detail**: Individual course/product pages with enrollment features
- **About**: Founder story with animated timeline and testimonials
- **Auth**: Login/signup with form validation and animations
- **404**: Custom not-found page

### UI Components
- Complete shadcn/ui component library implementation
- Custom Navbar with mobile responsiveness
- Alert system for user feedback
- Responsive design with mobile-first approach

### Data Management
- Mock data for courses and testimonials
- TypeScript interfaces for type safety
- Simulated API interactions (frontend-only for now)

## Data Flow

### Current State (Frontend-Only)
1. Static data stored in TypeScript files
2. Mock API interactions with alerts for user feedback
3. Client-side routing with wouter
4. Form validation using React Hook Form (configured but not fully implemented)

### Planned Backend Integration
1. Express routes under `/api` prefix
2. Database operations through Drizzle ORM
3. User authentication and session management
4. Real course enrollment and payment processing

## External Dependencies

### Core Dependencies
- **UI**: React, Radix UI components, Tailwind CSS
- **State**: TanStack Query for caching and synchronization
- **Forms**: React Hook Form with Zod validation
- **Database**: Drizzle ORM with Neon Database serverless driver
- **Build**: Vite, ESBuild, TypeScript

### Development Tools
- **Database**: Drizzle Kit for migrations and schema management
- **Development**: Replit-specific plugins for hot reloading
- **Styling**: PostCSS with Tailwind and Autoprefixer

### Notable Features
- AOS (Animate On Scroll) for scroll-triggered animations
- Date-fns for date manipulation
- Nanoid for unique ID generation
- Class Variance Authority for component styling variants

## Deployment Strategy

### Development
- Vite dev server with HMR
- Express server running on Node.js
- Database migrations via Drizzle Kit
- Environment variables for database connection

### Production Build
- Vite builds static assets to `dist/public`
- ESBuild bundles server code to `dist/index.js`
- Static file serving through Express
- PostgreSQL database hosted on Neon

### Environment Configuration
- Database URL required via environment variables
- Replit-specific configurations for development
- ESM modules throughout the project
- TypeScript compilation with strict mode enabled

### Key Considerations
- The application is currently frontend-focused with mock backend functionality
- Database schema is defined but not fully utilized
- Authentication system is designed but not implemented
- Payment integration planned but not developed
- The project uses a monorepo structure with shared TypeScript definitions

The architecture supports easy transition from the current frontend-only state to a full-stack application by implementing the planned Express routes and database operations.