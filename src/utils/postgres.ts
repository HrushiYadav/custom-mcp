import pkg from 'pg';
const { Client } = pkg;

export async function queryPostgres({
  connectionString,
  query
}: {
  connectionString: string;
  query: string;
}) {
  const client = new Client({ connectionString });
  await client.connect();
  const result = await client.query(query);
  await client.end();
  return result.rows;
}
