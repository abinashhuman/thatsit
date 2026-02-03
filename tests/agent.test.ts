import { describe, it, expect, beforeEach } from 'vitest';
import { loadConfig, validateConfig } from '../src/utils/config.js';

describe('Config', () => {
  beforeEach(() => {
    // Reset environment for tests
    delete process.env.ANTHROPIC_API_KEY;
    delete process.env.OPENCLAW_SANDBOX_MODE;
    delete process.env.OPENCLAW_GATEWAY_PORT;
  });

  it('should load default config values', () => {
    const config = loadConfig();

    expect(config.llm.provider).toBe('anthropic');
    expect(config.capabilities.browser).toBe(true);
    expect(config.capabilities.filesystem).toBe(true);
    expect(config.gateway.port).toBe(18789);
  });

  it('should enable sandbox mode when configured', () => {
    process.env.OPENCLAW_SANDBOX_MODE = 'true';
    const config = loadConfig();

    expect(config.capabilities.sandbox).toBe(true);
    expect(config.capabilities.shell).toBe(false);
  });

  it('should throw error when API key is missing', () => {
    const config = loadConfig();

    expect(() => validateConfig(config)).toThrow('ANTHROPIC_API_KEY is required');
  });

  it('should pass validation with API key', () => {
    process.env.ANTHROPIC_API_KEY = 'test-key';
    const config = loadConfig();

    expect(() => validateConfig(config)).not.toThrow();
  });
});
