# Source Code Structure

This directory contains all the source code for the portfolio application. Below is a detailed overview of the folder organization and purpose of each directory.

## Directory Overview

```
src/
├── assets/                 # Static assets and images
├── components/             # Reusable UI components
├── constants/              # Application constants and configuration
├── data/                   # Data files and datasets
├── hooks/                  # Custom React hooks
├── layouts/                # Layout components and page wrappers
├── lib/                    # Utility functions and API helpers
├── pages/                  # Page components
├── routes/                 # Routing configuration
├── sections/               # Section components for different page regions
├── App.tsx                 # Main App component
├── App.css                 # App-level styles
├── main.tsx                # Application entry point
└── index.css               # Global styles
```

## Detailed Breakdown

### 📁 `assets/`
Contains static assets used throughout the application.

- **images/** - Project portfolio images
  - `atw.png`
  - `bizkeeper.png`
  - `blog1.png`
  - `bookify.png`
  - `courviaship.png`
  - `hop.png`
  - `lernstasy.png`
  - `movizio.png`
  - `pixenai.png`
  - `rella-luxury.png`
- `hero.png` - Hero section image
- `react.svg` - React logo
- `vite.svg` - Vite logo

### 📁 `components/`
Reusable, modular components for building the UI.

- **layouts/** - Layout-related components
- **ui/** - Base UI components
  - `button.tsx` - Button component
  - `button-variants.ts` - Button style variants

### 📁 `constants/`
Application constants and configuration values.
*(Currently empty, intended for constants like API endpoints, config values, etc.)*

### 📁 `data/`
Data files and datasets.
*(Currently empty, intended for mock data, configuration objects, etc.)*

### 📁 `hooks/`
Custom React hooks for shared logic.
*(Currently empty, intended for custom hooks like useAuth, useFetch, etc.)*

### 📁 `layouts/`
Main layout components that wrap pages.

- `MainLayout.tsx` - Primary layout component used across pages

### 📁 `lib/`
Utility functions and API integration helpers.

- `api.ts` - API client and request helpers
- `utils.ts` - General utility functions

### 📁 `pages/`
Page components for different routes.
*(Currently empty, intended for page components like Home, About, Contact, etc.)*

### 📁 `routes/`
Routing configuration and setup.

- `AppRoutes.tsx` - Application route definitions

### 📁 `sections/`
Section components for different parts of pages.

- `Hero.tsx` - Hero section component

## Root Files

### `App.tsx`
The main App component - typically contains routing setup and top-level application logic.

### `App.css`
Styles for the App component and application-wide styling.

### `main.tsx`
Application entry point - bootstraps the React application and mounts it to the DOM.

### `index.css`
Global styles applied to the entire application.

## Usage Notes

- **Components** should be reusable and focused on a single responsibility
- **Pages** represent full page views and are typically mapped to routes
- **Sections** are larger logical parts of pages (e.g., Hero, Features, Footer)
- **Layouts** provide consistent structure across pages
- **Lib** contains pure functions and services (API calls, utilities)
- **Assets** are static resources like images and SVGs

## Getting Started

To add new features:
1. Create page components in `pages/`
2. Add routes in `routes/AppRoutes.tsx`
3. Build reusable components in `components/`
4. Use `lib/` for API and utility functions
5. Add constants to `constants/` and data to `data/`
