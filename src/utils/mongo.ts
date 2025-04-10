import { MongoClient } from 'mongodb';

export async function queryMongo({
  uri,
  dbName,
  collection,
  filter = {}
}: {
  uri: string;
  dbName: string;
  collection: string;
  filter?: Record<string, any>;
}) {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  const results = await db.collection(collection).find(filter).toArray();
  await client.close();
  return results;
}
