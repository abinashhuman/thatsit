import { defineConfig } from 'openclaw';

export default defineConfig({
  // LLM Provider - Anthropic Claude
  model: {
    provider: 'anthropic',
    model: 'claude-3-5-haiku-20241022',
  },

  // Agent Capabilities (Full MacBook Control)
  capabilities: {
    shell: true,          // Execute shell commands
    browser: true,        // Browser automation
    filesystem: true,     // Read/write files
    sandbox: false,       // Full access mode (set true for restricted)
  },

  // Memory & Context
  memory: {
    persistent: true,
    storePath: './.openclaw/memory',
  },

  // Workspace Skills
  skills: {
    workspace: './skills',
  },

  // ======= VOICE (Uncomment when ready) =======
  // transcription: [
  //   { provider: 'openai', model: 'whisper-1' },
  // ],
  // tts: {
  //   provider: 'elevenlabs',
  //   voiceId: process.env.ELEVENLABS_VOICE_ID,
  // },
});
