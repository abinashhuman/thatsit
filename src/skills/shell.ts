import { Skill, registerSkill } from './index.js';
import { logger } from '../utils/logger.js';

export const shellSkill: Skill = {
  name: 'shell',
  description: 'Execute shell commands on the system',
  execute: async (input: string): Promise<string> => {
    logger.info(`Shell skill executing: ${input}`);
    // OpenClaw handles shell execution through its runtime
    // This skill definition is for custom extensions
    return `Shell operation: ${input}`;
  },
};

export function registerShellSkill(): void {
  registerSkill(shellSkill);
}
