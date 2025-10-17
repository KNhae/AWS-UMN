import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, ScanCommand, GetCommand } from '@aws-sdk/lib-dynamodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/User';
import { AppError } from '../middleware/errorHandler';

const client = new DynamoDBClient({ region: process.env.AWS_REGION || 'us-east-1' });
const docClient = DynamoDBDocumentClient.from(client);
const TABLE_NAME = process.env.DYNAMODB_USERS_TABLE || 'aws-club-users';

interface RegisterInput {
  email: string;
  password: string;
  name: string;
}

interface LoginInput {
  email: string;
  password: string;
}

export const registerUser = async (input: RegisterInput) => {
  // Check if user already exists
  const existingUser = await getUserByEmail(input.email);
  if (existingUser) {
    throw new AppError('User already exists', 400);
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(input.password, 10);

  const user: User = {
    id: uuidv4(),
    email: input.email,
    password: hashedPassword,
    name: input.name,
    role: 'member',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  await docClient.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: user
  }));

  // Generate token
  const token = generateToken(user.id, user.email);

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    },
    token
  };
};

export const loginUser = async (input: LoginInput) => {
  const user = await getUserByEmail(input.email);

  if (!user || !(await bcrypt.compare(input.password, user.password))) {
    throw new AppError('Invalid credentials', 401);
  }

  const token = generateToken(user.id, user.email);

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    },
    token
  };
};

export const getUserProfile = async (userId: string) => {
  const result = await docClient.send(new GetCommand({
    TableName: TABLE_NAME,
    Key: { id: userId }
  }));

  if (!result.Item) {
    throw new AppError('User not found', 404);
  }

  const user = result.Item as User;

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role
  };
};

const getUserByEmail = async (email: string): Promise<User | null> => {
  const result = await docClient.send(new ScanCommand({
    TableName: TABLE_NAME,
    FilterExpression: 'email = :email',
    ExpressionAttributeValues: {
      ':email': email
    }
  }));

  return (result.Items?.[0] as User) || null;
};

const generateToken = (id: string, email: string): string => {
  return jwt.sign(
    { id, email },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  );
};
