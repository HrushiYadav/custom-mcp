// @ts-ignore
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
// @ts-ignore
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { tools } from './tools.js';

const server = new Server({
  name: 'universal-data-mcp-server',
  version: '1.0.0',
  capabilities: { tools }
});

(async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
})();
