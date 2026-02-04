# MCP Server for SimpleLocalize

[SimpleLocalize](https://www.simplelocalize.io/?utm_source=dx&utm_medium=simplelocalize-mcp-server) is the developer-first translation management system.

This is a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) server that provides tools for interacting with the SimpleLocalize API.

## Features (Tools)

- Create translation key (bulk)
- Update translations (bulk)
- Get all translation keys
- Get translation key details
- Update translation key
- Delete translation keys (bulk)
- Get tags
- Create tag
- Get languages
- Create languages
- Get translations
- Get hosting environments
- Get hosting environment details
- Publish translations to hosting

Feel free to add more tools by making a pull request or [creating a feature request](https://github.com/simplelocalize/simplelocalize-mcp-server/issues/new).

## Installation

To use the MCP server, you'll need an API key. You can create and manage API keys in **SimpleLocalize > Settings > Credentials**:

To run the server in a client like Claude Desktop, Cursor or Windsurf, add the following to your MCP config:

```json
{
  "mcpServers": {
    "simplelocalize": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@simplelocalize/simplelocalize-mcp", "--api-key=SIMPLELOCALIZE_API_KEY"]
    }
  }
}
```

Replace `SIMPLELOCALIZE_API_KEY` with your API key

For detailed setup guides, see:

- [Cursor AI](https://docs.cursor.com/context/model-context-protocol)
- [Visual Studio Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
- [GitHub Copilot](https://github.blog/changelog/2025-05-19-agent-mode-and-mcp-support-for-copilot-in-jetbrains-eclipse-and-xcode-now-in-public-preview/)
- [Claude Desktop](https://modelcontextprotocol.io/quickstart/user)
- [Windsurf](https://docs.codeium.com/windsurf/mcp)

## Development

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Build the server:

   ```bash
   pnpm build
   ```

3. Update client to use the local build:
   ```json
   {
     "mcpServers": {
       "simplelocalize": {
         "command": "node",
         "args": ["path/to/simplelocalize-mcp-server/build/index.js"],
         "env": {
           "SIMPLELOCALIZE_API_KEY": "your_api_key"
         }
       }
     }
   }
   ```

## Debugging

To debug the MCP server, you can use the MCP Inspector tool:

1. Run the server with the inspector:

   ```bash
   pnpm inspector
   ```

2. Open the provided URL in your browser to view and debug the MCP requests and responses.

3. Include the `--api-key` argument.

## Learn more

- [SimpleLocalize developer docs](https://simplelocalize.io/docs/?utm_source=dx&utm_medium=simplelocalize-mcp-server)
- [SimpleLocalize API reference](https://simplelocalize.io/docs/api/get-started/?utm_source=dx&utm_medium=simplelocalize-mcp-server)
- [Sign up for SimpleLocalize](https://simplelocalize.io/register/?utm_source=dx&utm_medium=simplelocalize-mcp-server)
