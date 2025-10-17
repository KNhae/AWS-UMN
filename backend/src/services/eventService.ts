import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, ScanCommand, GetCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';
import { Event } from '../models/Event';

const client = new DynamoDBClient({ region: process.env.AWS_REGION || 'us-east-1' });
const docClient = DynamoDBDocumentClient.from(client);
const TABLE_NAME = process.env.DYNAMODB_EVENTS_TABLE || 'aws-club-events';

export const createEvent = async (eventData: Partial<Event>): Promise<Event> => {
  const event: Event = {
    id: uuidv4(),
    title: eventData.title!,
    description: eventData.description!,
    date: eventData.date!,
    location: eventData.location!,
    imageUrl: eventData.imageUrl,
    registrationLink: eventData.registrationLink,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  await docClient.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: event
  }));

  return event;
};

export const getAllEvents = async (): Promise<Event[]> => {
  const result = await docClient.send(new ScanCommand({
    TableName: TABLE_NAME
  }));

  return (result.Items as Event[]) || [];
};

export const getEventById = async (id: string): Promise<Event | null> => {
  const result = await docClient.send(new GetCommand({
    TableName: TABLE_NAME,
    Key: { id }
  }));

  return (result.Item as Event) || null;
};

export const updateEvent = async (id: string, updates: Partial<Event>): Promise<Event> => {
  const updateExpression: string[] = [];
  const expressionAttributeNames: Record<string, string> = {};
  const expressionAttributeValues: Record<string, any> = {};

  Object.keys(updates).forEach((key, index) => {
    if (key !== 'id' && key !== 'createdAt') {
      updateExpression.push(`#attr${index} = :val${index}`);
      expressionAttributeNames[`#attr${index}`] = key;
      expressionAttributeValues[`:val${index}`] = updates[key as keyof Event];
    }
  });

  updateExpression.push(`#updatedAt = :updatedAt`);
  expressionAttributeNames['#updatedAt'] = 'updatedAt';
  expressionAttributeValues[':updatedAt'] = new Date().toISOString();

  await docClient.send(new UpdateCommand({
    TableName: TABLE_NAME,
    Key: { id },
    UpdateExpression: `SET ${updateExpression.join(', ')}`,
    ExpressionAttributeNames: expressionAttributeNames,
    ExpressionAttributeValues: expressionAttributeValues
  }));

  return getEventById(id) as Promise<Event>;
};

export const deleteEvent = async (id: string): Promise<void> => {
  await docClient.send(new DeleteCommand({
    TableName: TABLE_NAME,
    Key: { id }
  }));
};
