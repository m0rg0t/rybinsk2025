# Rybinsk City Day 2025 Events App

## Project Overview
A React frontend application displaying events for Rybinsk City Day 2025 (August 2nd). The app shows information about events grouped by locations with filtering and search capabilities.

## Features
- **Adaptive Design**: Mobile-first responsive layout using Tailwind CSS
- **Real-time Status**: Shows current running events with live indicators
- **Filter System**:
  - Filter by location (9 different venues)
  - Filter by time status (current/future/all events)
  - Text search through events
- **Event Details**: Event cards with time, description, category, and status
- **Interactive UI**: Built with shadcn/ui components

## Tech Stack
- React 18 + TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui component library
- date-fns for time management
- Lucide React for icons

## Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure
```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── EventCard.tsx
│   ├── LocationCard.tsx
│   ├── EventList.tsx
│   └── FilterBar.tsx
├── data/
│   └── events.json   # Event data extracted from program.jpg
├── types/
│   └── index.ts      # TypeScript interfaces
├── utils/
│   └── time.ts       # Time parsing utilities
└── lib/
    └── utils.ts      # Utility functions
```

## Locations & Events
The app displays events from 9 locations:
- Крестовая ул. (Krestovaya St.)
- Красная площадь (Red Square)
- Стоялая ул. (Stoyalaya St.)
- Буквинская ул. (Bukvinskaya St.)
- Парадная лестница (Main Staircase)
- Преображенский парк (Preobrazhensky Park)
- Аллея Славы (Glory Alley)
- Авиатория реки (River Aviation)
- Волжский парк. Балеткина (Volzhsky Park)

Total: 30+ events across various categories (festivals, concerts, exhibitions, sports, children's activities, etc.)