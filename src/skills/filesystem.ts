import { Skill, registerSkill } from './index.js';
import { logger } from '../utils/logger.js';

export const filesystemSkill: Skill = {
  name: 'filesystem',
  description: 'Read, write, and manage files on the system',
  execute: async (input: string): Promise<string> => {
    logger.info(`Filesystem skill executing: ${input}`);
    // OpenClaw handles filesystem operations through its runtime
    // This skill definition is for custom extensions
    return `Filesystem operation: ${input}`;
  },
};

export function registerFilesystemSkill(): void {
  registerSkill(filesystemSkill);
}
