import mysql from 'mysql2/promise';

export async function queryMySQL({
  host,
  user,
  password,
  database,
  query
}: {
  host: string;
  user: string;
  password: string;
  database: string;
  query: string;
}) {
  const connection = await mysql.createConnection({ host, user, password, database });
  const [rows] = await connection.execute(query);
  await connection.end();
  return rows;
}
