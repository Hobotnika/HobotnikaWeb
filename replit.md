# Hobotnika OÜ Website

## Overview

Hobotnika OÜ is a digital marketing consultancy website built as a React-based single-page application. The project showcases a professional B2B marketing consultancy targeting global business clients. The website features modern design principles with a focus on conversions and user engagement through clean layouts, professional typography, and strategic call-to-action placement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with support for Home, About, Services, and Contact pages
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Styling**: Tailwind CSS with a custom design system based on shadcn/ui components
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout the entire stack for consistency
- **API Structure**: RESTful API design with Express routes (currently minimal implementation)
- **Storage Layer**: Abstract storage interface with in-memory implementation (MemStorage class)
- **Development**: Hot module replacement and error overlay for enhanced developer experience

### Database Schema
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon serverless)
- **Schema**: Basic user management with username/password authentication structure
- **Migrations**: Drizzle Kit for database schema management and migrations

### Design System
- **Component Library**: Comprehensive shadcn/ui component system with custom theming
- **Color Palette**: Navy blue primary (#214585), secondary blue (#2563eb), accent cyan (#06b6d4)
- **Typography**: Inter font family with consistent weight and size hierarchy
- **Layout**: Responsive grid system with mobile-first approach
- **Spacing**: Tailwind's 4-unit spacing system for consistent margins and padding

### User Interface Components
- **Navigation**: Fixed header with mobile-responsive hamburger menu
- **Hero Section**: Full-viewport height with gradient overlay and dual CTAs
- **Content Sections**: Card-based layouts with alternating designs and hover effects
- **Forms**: Clean input styling with focus states and validation support
- **Interactive Elements**: Smooth scrolling, hover elevations, and transition animations

## External Dependencies

### UI and Styling
- **@radix-ui**: Complete set of accessible UI primitives for complex components
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Consistent icon library for UI elements

### State and Data Management
- **@tanstack/react-query**: Server state management with caching and synchronization
- **react-hook-form**: Form handling with validation support
- **@hookform/resolvers**: Form validation resolvers for schema validation

### Database and Backend
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Zod integration for schema validation
- **express**: Web application framework for Node.js

### Development Tools
- **vite**: Fast build tool with hot module replacement
- **typescript**: Static type checking for enhanced development experience
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **tsx**: TypeScript execution engine for development server

### Utilities and Enhancements
- **date-fns**: Date manipulation and formatting library
- **clsx**: Conditional className utility for dynamic styling
- **cmdk**: Command palette functionality for improved UX
- **wouter**: Lightweight routing solution for React applications