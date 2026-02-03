import { logger } from '../utils/logger.js';

export interface Skill {
  name: string;
  description: string;
  execute: (input: string) => Promise<string>;
}

const skills: Map<string, Skill> = new Map();

export function registerSkill(skill: Skill): void {
  skills.set(skill.name, skill);
  logger.debug(`Registered skill: ${skill.name}`);
}

export function getSkill(name: string): Skill | undefined {
  return skills.get(name);
}

export function getAllSkills(): Skill[] {
  return Array.from(skills.values());
}

export function initializeSkills(): void {
  logger.info('Initializing skills...');
  // Skills are loaded by OpenClaw from the skills/ directory
  // Custom skills can be registered here programmatically
  logger.info(`${skills.size} skills registered`);
}
