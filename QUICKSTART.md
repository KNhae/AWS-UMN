# Quick Start Guide - AWS Club Website

Follow these steps to get your AWS Club website running locally.

## Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

## Step 2: Set Up Backend Environment

```bash
cp .env.example .env
```

Edit `.env` and add your AWS credentials:
```
PORT=3001
NODE_ENV=development
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here
DYNAMODB_EVENTS_TABLE=aws-club-events
DYNAMODB_MEMBERS_TABLE=aws-club-members
DYNAMODB_USERS_TABLE=aws-club-users
JWT_SECRET=your_random_secret_here
CORS_ORIGIN=http://localhost:5173
```

## Step 3: Create DynamoDB Tables

Go to AWS Console → DynamoDB → Create Table

Create these three tables:

1. **aws-club-events**
   - Table name: `aws-club-events`
   - Partition key: `id` (String)
   - Use default settings

2. **aws-club-members**
   - Table name: `aws-club-members`
   - Partition key: `id` (String)
   - Use default settings

3. **aws-club-users**
   - Table name: `aws-club-users`
   - Partition key: `id` (String)
   - Use default settings

## Step 4: Start Backend Server

```bash
# Still in backend directory
npm run dev
```

You should see:
```
🚀 Server running on port 3001
📍 Environment: development
```

## Step 5: Install Frontend Dependencies

Open a new terminal:

```bash
cd frontend
npm install
```

## Step 6: Set Up Frontend Environment

```bash
cp .env.example .env
```

The default `.env` should work:
```
VITE_API_URL=http://localhost:3001/api
```

## Step 7: Start Frontend Server

```bash
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

## Step 8: Open Your Browser

Navigate to: **http://localhost:5173**

You should see your AWS Club website!

## Troubleshooting

### Backend won't start
- Check that port 3001 is not in use
- Verify AWS credentials are correct
- Make sure DynamoDB tables are created

### Frontend won't start
- Check that port 5173 is not in use
- Verify all dependencies installed correctly
- Check that backend is running on port 3001

### API calls failing
- Ensure backend is running
- Check CORS settings in backend
- Verify `.env` files are configured correctly

### DynamoDB errors
- Verify AWS credentials have DynamoDB permissions
- Check table names match exactly
- Ensure tables are in the correct AWS region

## Next Steps

1. **Create your first user**: Go to `/register` and sign up
2. **Add events**: Use the API or create an admin panel
3. **Customize styling**: Edit Tailwind classes in frontend components
4. **Deploy to AWS**: Follow deployment guides in main README

## Useful Commands

### Backend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run ESLint
```

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Need Help?

- Check the main [README.md](./README.md)
- Review backend docs: [backend/README.md](./backend/README.md)
- Review frontend docs: [frontend/README.md](./frontend/README.md)
- Contact: awsclub@umn.edu
