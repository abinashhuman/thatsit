import 'dotenv/config';
import { initializeAgent } from './agent/index.js';
import { logger } from './utils/logger.js';

async function main() {
  logger.info('Starting ThatsItAI Agent...');

  try {
    const agent = await initializeAgent();
    logger.info('ThatsItAI Agent initialized successfully');
    logger.info('Ready to receive commands. Type your request or use voice input.');

    // Keep the process running
    process.on('SIGINT', () => {
      logger.info('Shutting down ThatsItAI Agent...');
      process.exit(0);
    });

    process.on('SIGTERM', () => {
      logger.info('Shutting down ThatsItAI Agent...');
      process.exit(0);
    });
  } catch (error) {
    logger.error('Failed to initialize agent:', error);
    process.exit(1);
  }
}

main();
