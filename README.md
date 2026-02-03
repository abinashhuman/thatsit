# ThatsItAI

An autonomous AI agent powered by [OpenClaw](https://github.com/openclaw/openclaw) that takes text commands and executes tasks on your MacBook.

## Features

- **Autonomous Execution**: Execute shell commands, manage files, control apps
- **Browser Control**: Automate web browsing, fill forms, extract data
- **Persistent Memory**: Agent remembers context across sessions
- **Claude-Powered**: Uses Anthropic Claude for intelligent reasoning
- **Extensible Skills**: Add custom skills for specific workflows

## Prerequisites

- **Node.js 22+** - Required for OpenClaw
- **Anthropic API Key** - For Claude LLM

## Quick Start

### 1. Install Dependencies

```bash
# Install Node.js 22+ (if not installed)
brew install node@22

# Install project dependencies
npm install

# Install OpenClaw globally (optional, for CLI access)
npm install -g openclaw@latest
```

### 2. Configure Environment

```bash
# Copy environment template
cp .env.example .env

# Edit .env and add your Anthropic API key
# ANTHROPIC_API_KEY=your-api-key-here
```

### 3. Run OpenClaw Onboarding

```bash
openclaw onboard
```

This wizard will guide you through gateway setup and channel connections.

### 4. Start the Agent

```bash
# Development mode (with hot reload)
npm run dev

# Or production mode
npm run build && npm start
```

## Project Structure

```
ThatsItAI/
├── src/
│   ├── index.ts          # Entry point
│   ├── agent/            # Agent initialization & commands
│   ├── skills/           # Skill definitions
│   └── utils/            # Logger, config utilities
├── skills/               # OpenClaw workspace skills
│   └── thatsit-macbook/  # Custom macOS skills
├── tests/                # Test files
├── openclaw.config.ts    # OpenClaw configuration
└── .env                  # Environment variables (create from .env.example)
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | Yes | Claude API key for LLM |
| `OPENAI_API_KEY` | No | For Whisper STT (future) |
| `ELEVENLABS_API_KEY` | No | For voice output (future) |
| `OPENCLAW_SANDBOX_MODE` | No | Set `true` for restricted shell |

## Commands

```bash
npm run dev      # Start in development mode
npm run build    # Build TypeScript
npm run start    # Run production build
npm run test     # Run tests
```

## Adding Voice (Future)

Voice capabilities can be enabled by:

1. Adding API keys to `.env`:
   ```
   OPENAI_API_KEY=your-key       # For Whisper STT
   ELEVENLABS_API_KEY=your-key   # For TTS
   ELEVENLABS_VOICE_ID=voice-id
   ```

2. Uncommenting voice config in `openclaw.config.ts`

3. Installing voice packages:
   ```bash
   npm install openai elevenlabs
   ```

## License

MIT
