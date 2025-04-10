import { z } from 'zod';
import { queryMongo } from './utils/mongo.js';
import { queryPostgres } from './utils/postgres.js';
import { queryMySQL } from './utils/mysql.js';
import { querySQLite } from './utils/sqlite.js';
import { getFileContent } from './utils/files.js';
import { fetchAPI } from './utils/api.js';

export const tools = {
  queryMongo: {
    name: 'queryMongo',
    description: 'Query a MongoDB collection',
    inputSchema: z.object({
      uri: z.string(),
      dbName: z.string(),
      collection: z.string(),
      filter: z.record(z.any()).optional()
    }),
    outputSchema: z.any(),
    handler: queryMongo
  },
  queryPostgres: {
    name: 'queryPostgres',
    description: 'Run a query on PostgreSQL',
    inputSchema: z.object({
      connectionString: z.string(),
      query: z.string()
    }),
    outputSchema: z.any(),
    handler: queryPostgres
  },
  queryMySQL: {
    name: 'queryMySQL',
    description: 'Run a query on MySQL',
    inputSchema: z.object({
      host: z.string(),
      user: z.string(),
      password: z.string(),
      database: z.string(),
      query: z.string()
    }),
    outputSchema: z.any(),
    handler: queryMySQL
  },
  querySQLite: {
    name: 'querySQLite',
    description: 'Run a query on a SQLite DB',
    inputSchema: z.object({
      filePath: z.string(),
      query: z.string()
    }),
    outputSchema: z.any(),
    handler: querySQLite
  },
  getFileContent: {
    name: 'getFileContent',
    description: 'Read a local or SharePoint file via HTTP',
    inputSchema: z.object({
      path: z.string(),
      isSharePoint: z.boolean().optional(),
      token: z.string().optional()
    }),
    outputSchema: z.string(),
    handler: getFileContent
  },
  fetchAPI: {
    name: 'fetchAPI',
    description: 'Fetch data from a public API',
    inputSchema: z.object({
      url: z.string(),
      method: z.enum(['GET', 'POST']),
      headers: z.record(z.string()).optional(),
      body: z.record(z.any()).optional()
    }),
    outputSchema: z.any(),
    handler: fetchAPI
  }
};
