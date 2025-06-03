import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import SimpleLocalizeAPI from "./api.js";
import tools from "./tools.js";

class SimpleLocalizeMCPServer extends McpServer {
  private _simpleLocalize: SimpleLocalizeAPI;

  constructor({ apiKey }: { apiKey: string }) {
    super({
      name: "simplelocalize",
      version: "0.0.1",
    });

    this._simpleLocalize = new SimpleLocalizeAPI(apiKey);

    tools.forEach((tool) => {
      this.tool(tool.method, tool.description, tool.parameters.shape, async (arg: unknown, _extra: unknown) => {
        const result = await this._simpleLocalize.run(tool.method, arg);
        return {
          content: [
            {
              type: "text" as const,
              text: String(result),
            },
          ],
        };
      });
    });
  }
}

export default SimpleLocalizeMCPServer;
