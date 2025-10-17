# AWS Club Frontend

React + TypeScript + Vite + Tailwind CSS frontend for the AWS Club website.

## Features

- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- React Router for navigation
- Zustand for state management
- Axios for API calls
- Responsive design

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Update `.env` if needed (default points to localhost:3001)

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/        # Reusable components
│   │   └── layout/        # Layout components (Header, Footer, etc.)
│   ├── pages/             # Page components
│   ├── services/          # API service layer
│   ├── store/             # Zustand stores
│   ├── types/             # TypeScript types
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
└── index.html             # HTML template
```

## Available Routes

- `/` - Home page
- `/events` - Events listing
- `/members` - Team members
- `/about` - About the club
- `/login` - Login page
- `/register` - Registration page

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Zustand** - State management
- **Axios** - HTTP client
- **date-fns** - Date formatting

## Deployment

This app can be deployed to:
- AWS Amplify (recommended for AWS Club)
- Vercel
- Netlify
- AWS S3 + CloudFront

For AWS Amplify deployment, connect your GitHub repository and Amplify will automatically detect the Vite configuration.
