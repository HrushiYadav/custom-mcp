import fs from 'fs/promises';
import fetch from 'node-fetch';

export async function getFileContent({
  path,
  isSharePoint = false,
  token
}: {
  path: string;
  isSharePoint?: boolean;
  token?: string;
}) {
  if (isSharePoint) {
    const res = await fetch(path, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
    return await res.text();
  } else {
    return await fs.readFile(path, 'utf-8');
  }
}
