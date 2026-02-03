import { logger } from '../utils/logger.js';

export interface Command {
  name: string;
  description: string;
  execute: (args: string[]) => Promise<string>;
}

const commands: Map<string, Command> = new Map();

export function registerCommand(command: Command): void {
  commands.set(command.name, command);
  logger.debug(`Registered command: ${command.name}`);
}

export function getCommand(name: string): Command | undefined {
  return commands.get(name);
}

export function getAllCommands(): Command[] {
  return Array.from(commands.values());
}

export function registerCommands(): void {
  // Register built-in commands
  registerCommand({
    name: 'help',
    description: 'Show available commands',
    execute: async () => {
      const cmds = getAllCommands();
      const helpText = cmds
        .map((cmd) => `  ${cmd.name}: ${cmd.description}`)
        .join('\n');
      return `Available commands:\n${helpText}`;
    },
  });

  registerCommand({
    name: 'status',
    description: 'Show agent status',
    execute: async () => {
      return 'ThatsItAI Agent is running and ready for commands.';
    },
  });

  logger.info('Built-in commands registered');
}
