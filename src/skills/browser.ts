import { Skill, registerSkill } from './index.js';
import { logger } from '../utils/logger.js';

export const browserSkill: Skill = {
  name: 'browser',
  description: 'Control browser, navigate websites, fill forms, extract data',
  execute: async (input: string): Promise<string> => {
    logger.info(`Browser skill executing: ${input}`);
    // OpenClaw handles browser automation through its runtime
    // This skill definition is for custom extensions
    return `Browser operation: ${input}`;
  },
};

export function registerBrowserSkill(): void {
  registerSkill(browserSkill);
}
