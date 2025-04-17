
# Universal Data MCP Server 🧠

**Connect your LLM to real-world databases, files, and APIs using the Model Context Protocol.**

This project provides a lightweight MCP (Model Context Protocol) server built in TypeScript that enables AI assistants (like Claude or Cursor) to query structured databases, fetch external APIs, and inspect local files — all via a clean MCP-compatible interface.

---

## <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/github/explore/main/topics/database/database.png"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/github/explore/main/topics/database/database.png"><img alt="MCP Data Bridge" width="100%" style="max-width: 600px; display: block; margin-left: auto; margin-right: auto;"></picture>

---

## Key Features 🚀

- **📦 Multi-Database Querying:** Supports MongoDB, PostgreSQL, MySQL, and SQLite.
- **📁 File Content Access:** Read local files using `getFileContent`.
- **🌐 JSON API Integration:** Fetch and process external APIs with `fetchAPI`.
- **🧠 LLM-Ready:** Use natural language with AI tools like Claude or Cursor.
- **🛠️ Zod-Schema Validation:** Ensures reliable input/output via types.

<details>
  <summary><strong>Available Tools</strong></summary>

- `queryMongo`: Query MongoDB collections  
- `queryPostgres`: Run SQL queries on PostgreSQL  
- `queryMySQL`: Run SQL queries on MySQL  
- `querySQLite`: Query SQLite DBs from file  
- `getFileContent`: Read contents of a file  
- `fetchAPI`: Send GET requests to JSON APIs

</details>

---

## How It Works 🤔

The system connects via stdin/stdout to a local MCP-compatible client:

```
[LLM Client] <-> [Universal MCP Server] <-> [Data Sources]
```

---

## Installation ⚙️

> **Note:** Requires Node.js 18+ and optionally access to databases or files you want to work with.

### Prerequisites

<details>
  <summary><strong>Required Software</strong></summary>

- **Node.js (v18+)**: [Download](https://nodejs.org)
- **npm** or **yarn**
- **MongoDB / PostgreSQL / MySQL / SQLite** installed locally or accessible remotely
- An **MCP-compatible LLM Client**:
  - [Claude Desktop](https://claude.ai/download)
  - [Cursor](https://www.cursor.com/en/downloads)

</details>

### Step 1: Clone and Install

```bash
git clone https://github.com/HrushiYadav/custom-mcp.git
cd custom-mcp
npm install
```

### Step 2: Start the MCP Server

```bash
npm start
```

This will launch the MCP server and expose all tools via `StdioServerTransport`.

---

## Configure Your MCP Client 🧠

Edit your LLM client’s configuration file to include:

```json
{
  "mcpServers": {
    "UniversalMCP": {
      "command": "npm",
      "args": ["start"],
      "workingDirectory": "/absolute/path/to/custom-mcp"
    }
  }
}
```

Supported clients like Claude or Cursor will automatically detect and start this server.

---

## Usage ▶️

Start your LLM client and try queries like:

```txt
Run `SELECT name FROM users WHERE age > 30` on PostgreSQL
Read the content of `package.json`
Fetch data from https://api.coindesk.com/v1/bpi/currentprice.json
```

---

## Project Structure 🧱

```
src/
├── index.ts         # Main MCP server
├── tools.ts         # Tool registry
└── utils/           # Tool handlers
    ├── api.ts
    ├── files.ts
    ├── mongo.ts
    ├── mysql.ts
    ├── postgres.ts
    └── sqlite.ts
```

---

## Contributing 🤝

We welcome all contributions to improve and extend the Universal Data MCP Server.

1. Fork this repository.
2. Create a branch (`feature/your-idea` or `bugfix/your-fix`).
3. Make your changes and test them.
4. Commit with a clear message (`feat: Add Postgres schema tool`).
5. Open a pull request.

---

## Troubleshooting ❓

<details>
<summary><strong>Common Issues</strong></summary>

- **Cannot start server?**
  - Ensure Node.js 18+ is installed
  - Run `npm install` before `npm start`

- **Client not connecting?**
  - Verify JSON path in your MCP config matches actual working directory

- **Database not responding?**
  - Check DB credentials and network access
  - Test connection with your DB tool directly

</details>


---

## Contact 👋

- GitHub: [universal-data-mcp-server](https://github.com/HrushiYadav/custom-mcp)
- **X/Twitter:** [@hrushi_tw](https://x.com/hrushi_tw)
---

## Acknowledgments 🙏

- [Model Context Protocol](https://modelcontextprotocol.org)
- [Zod](https://github.com/colinhacks/zod)
- [Dhravya](https://github.com/Dhravya)
