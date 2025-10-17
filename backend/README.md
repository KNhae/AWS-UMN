# AWS Club Backend API

Node.js/Express backend for the AWS Club website with TypeScript and AWS DynamoDB.

## Features

- RESTful API with Express
- TypeScript for type safety
- AWS DynamoDB for data storage
- JWT authentication
- Error handling middleware
- CORS enabled

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- AWS Account with DynamoDB access
- AWS CLI configured (or AWS credentials)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Update `.env` with your AWS credentials and configuration

### Development

Run the development server with hot reload:
```bash
npm run dev
```

The API will be available at `http://localhost:3001`

### Build

Compile TypeScript to JavaScript:
```bash
npm run build
```

### Production

Run the compiled code:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get event by ID
- `POST /api/events` - Create event (protected)
- `PUT /api/events/:id` - Update event (protected)
- `DELETE /api/events/:id` - Delete event (protected)

### Members
- `GET /api/members` - Get all members
- `GET /api/members/:id` - Get member by ID
- `POST /api/members` - Create member (protected)
- `PUT /api/members/:id` - Update member (protected)
- `DELETE /api/members/:id` - Delete member (protected)

## Project Structure

```
backend/
├── src/
│   ├── handlers/          # Request handlers (controllers)
│   ├── services/          # Business logic
│   ├── models/            # TypeScript interfaces
│   ├── middleware/        # Express middleware
│   ├── routes/            # API routes
│   └── index.ts           # Entry point
├── dist/                  # Compiled JavaScript
└── package.json
```

## AWS Setup

### DynamoDB Tables

Create three DynamoDB tables:

1. **aws-club-events**
   - Partition key: `id` (String)

2. **aws-club-members**
   - Partition key: `id` (String)

3. **aws-club-users**
   - Partition key: `id` (String)

You can create these tables using AWS Console, AWS CLI, or the infrastructure code.

## Testing

```bash
npm test
```

## Linting

```bash
npm run lint
```

## Formatting

```bash
npm run format
```
