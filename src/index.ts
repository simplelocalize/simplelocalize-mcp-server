#!/usr/bin/env node

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import SimpleLocalizeMCPServer from "./toolkit.js";

const ACCEPTED_ARGS = ["api-key"];

type Options = {
  apiKey: string;
};

function parseArgs(args: string[]) {
  const options: Options = {
    apiKey: ""
  };

  args.forEach((arg) => {
    if (arg.startsWith("--")) {
      const [key, value] = arg.slice(2).split("=");

      if (key == "api-key") {
        options.apiKey = value;
      } else {
        throw new Error(`Invalid argument: ${key}. Accepted arguments are: ${ACCEPTED_ARGS.join(", ")}`);
      }
    }
  });

  const apiKey = options.apiKey || process.env.SIMPLELOCALIZE_API_KEY;
  if (!apiKey) {
    throw new Error(
      "SimpleLocalize API key not provided. Please pass it as an argument --api-key=$KEY or set the SIMPLELOCALIZE_API_KEY environment variable.",
    );
  }
  options.apiKey = apiKey;
  return options;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  const server = new SimpleLocalizeMCPServer({
    apiKey: options.apiKey
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
