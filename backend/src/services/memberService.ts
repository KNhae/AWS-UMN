import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, ScanCommand, GetCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';
import { Member } from '../models/Member';

const client = new DynamoDBClient({ region: process.env.AWS_REGION || 'us-east-1' });
const docClient = DynamoDBDocumentClient.from(client);
const TABLE_NAME = process.env.DYNAMODB_MEMBERS_TABLE || 'aws-club-members';

export const createMember = async (memberData: Partial<Member>): Promise<Member> => {
  const member: Member = {
    id: uuidv4(),
    name: memberData.name!,
    email: memberData.email!,
    role: memberData.role || 'member',
    major: memberData.major,
    graduationYear: memberData.graduationYear,
    bio: memberData.bio,
    linkedIn: memberData.linkedIn,
    github: memberData.github,
    imageUrl: memberData.imageUrl,
    joinedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  await docClient.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: member
  }));

  return member;
};

export const getAllMembers = async (): Promise<Member[]> => {
  const result = await docClient.send(new ScanCommand({
    TableName: TABLE_NAME
  }));

  return (result.Items as Member[]) || [];
};

export const getMemberById = async (id: string): Promise<Member | null> => {
  const result = await docClient.send(new GetCommand({
    TableName: TABLE_NAME,
    Key: { id }
  }));

  return (result.Item as Member) || null;
};

export const updateMember = async (id: string, updates: Partial<Member>): Promise<Member> => {
  const updateExpression: string[] = [];
  const expressionAttributeNames: Record<string, string> = {};
  const expressionAttributeValues: Record<string, any> = {};

  Object.keys(updates).forEach((key, index) => {
    if (key !== 'id' && key !== 'createdAt') {
      updateExpression.push(`#attr${index} = :val${index}`);
      expressionAttributeNames[`#attr${index}`] = key;
      expressionAttributeValues[`:val${index}`] = updates[key as keyof Member];
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

  return getMemberById(id) as Promise<Member>;
};

export const deleteMember = async (id: string): Promise<void> => {
  await docClient.send(new DeleteCommand({
    TableName: TABLE_NAME,
    Key: { id }
  }));
};
