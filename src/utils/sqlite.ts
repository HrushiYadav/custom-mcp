import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function querySQLite({
  filePath,
  query
}: {
  filePath: string;
  query: string;
}) {
  const db = await open({
    filename: filePath,
    driver: sqlite3.Database
  });
  const rows = await db.all(query);
  await db.close();
  return rows;
}
