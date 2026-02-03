export interface Config {
  llm: {
    provider: string;
    model: string;
    apiKey: string;
  };
  capabilities: {
    shell: boolean;
    browser: boolean;
    filesystem: boolean;
    sandbox: boolean;
  };
  gateway: {
    port: number;
  };
}

export function loadConfig(): Config {
  return {
    llm: {
      provider: 'anthropic',
      model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-20250514',
      apiKey: process.env.ANTHROPIC_API_KEY || '',
    },
    capabilities: {
      shell: process.env.OPENCLAW_SANDBOX_MODE !== 'true',
      browser: true,
      filesystem: true,
      sandbox: process.env.OPENCLAW_SANDBOX_MODE === 'true',
    },
    gateway: {
      port: parseInt(process.env.OPENCLAW_GATEWAY_PORT || '18789', 10),
    },
  };
}

export function validateConfig(config: Config): void {
  if (!config.llm.apiKey) {
    throw new Error('ANTHROPIC_API_KEY is required');
  }
}
