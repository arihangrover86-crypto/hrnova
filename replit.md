# HRNOVA - HR Management System

## Overview

HRNOVA is a comprehensive HR management system designed as a marketing website and contact platform for HR solutions. The application features a modern React frontend with a landing page showcasing HR services, pricing plans, and customer testimonials, along with a contact form for lead generation. The backend provides API endpoints for handling contact submissions and storing them in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with CSS variables for theming and shadcn/ui components for consistent design
- **Animation**: Framer Motion for smooth animations and Lottie for complex animations
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database ORM**: Drizzle ORM for type-safe database operations and schema management
- **Validation**: Zod schemas for runtime type validation on API endpoints
- **Storage**: In-memory storage implementation with interface for easy database integration

### Database Design
- **Primary Database**: PostgreSQL configured through Drizzle with Neon Database serverless driver
- **Schema**: 
  - Users table with UUID primary keys and authentication fields
  - Contact submissions table for lead capture with timestamps
- **Migrations**: Drizzle Kit handles schema migrations and database synchronization

### Component Architecture
- **UI Components**: Modular component library using Radix UI primitives with custom styling
- **Page Components**: Route-specific components for different sections (Home, Not Found)
- **Feature Components**: Specialized components for business logic (ContactForm, ServiceCard, etc.)
- **Animation Components**: Dedicated components for Lottie animations and floating elements

### Development Tools
- **Type Checking**: TypeScript with strict mode enabled for compile-time error detection
- **Code Quality**: ESLint configuration following best practices
- **Development Server**: Vite dev server with HMR and error overlay for rapid development
- **Build Process**: Optimized production builds with code splitting and asset optimization

## External Dependencies

### UI and Styling
- **shadcn/ui**: Component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design
- **Radix UI**: Headless component primitives for building accessible user interfaces
- **Framer Motion**: Animation library for smooth transitions and interactive elements
- **Lottie**: Animation rendering for complex motion graphics

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database for production deployments
- **Drizzle ORM**: Type-safe ORM for database operations and schema management
- **Drizzle Kit**: CLI tools for database migrations and schema synchronization

### Development and Build
- **Vite**: Modern build tool and development server with fast HMR
- **TypeScript**: Static type checking for improved code quality and developer experience
- **React Query**: Server state management and data fetching with caching
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation for runtime type safety

### Backend Services
- **Express.js**: Web framework for building RESTful APIs
- **Connect PG Simple**: Session store for PostgreSQL integration
- **Date-fns**: Date manipulation utilities for timestamp handling

### Fonts and Icons
- **Google Fonts (Inter)**: Primary typography for consistent branding
- **Font Awesome**: Icon library for UI elements and visual indicators