import { loadConfig } from '../utils/config.js';
import { logger } from '../utils/logger.js';
import { registerCommands } from './commands.js';

export interface Agent {
  config: ReturnType<typeof loadConfig>;
  execute: (command: string) => Promise<string>;
}

export async function initializeAgent(): Promise<Agent> {
  const config = loadConfig();

  logger.info('Loading OpenClaw configuration...');

  // Validate required environment variables
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error(
      'ANTHROPIC_API_KEY is required. Please add it to your .env file.'
    );
  }

  // Register custom commands
  registerCommands();

  const agent: Agent = {
    config,
    execute: async (command: string) => {
      logger.info(`Executing command: ${command}`);
      // OpenClaw handles command execution through its runtime
      // This is a placeholder for custom command handling
      return `Command received: ${command}`;
    },
  };

  return agent;
}
