# 🚀 CLI AI Toolkit

A command-line interface toolkit for interacting with OpenAI and Google Gemini APIs. This project demonstrates a modular architecture with command registry pattern for extensible AI-powered tools.

## Features

- **Web Search**: Query and analyze information using OpenAI's language models
- **Gemini Integration**: Generate content and get feedback from Google Gemini
- **Image Generation**: Create images using DALL-E 3
- **Organized Output**: Automatically saves research and images to structured directories

## Architecture

### Project Structure

```
cli_ai_toolkit/
├── src/
│   ├── commands/           # Individual command implementations
│   │   ├── web-search.ts
│   │   ├── gemini.ts
│   │   └── image-generate.ts
│   ├── services/           # API service wrappers
│   │   ├── openai.ts
│   │   └── gemini.ts
│   ├── utils/              # Shared utilities
│   │   ├── helpers.ts      # File I/O, timestamps, helpers
│   │   └── registry.ts     # Command registry pattern
│   └── index.ts            # Main entrypoint
├── references/             # Saved search results and AI feedback
│   └── ai_feedback/        # Gemini responses
├── images/                 # Generated images
└── ...config files
```

### Design Patterns

- **Command Registry**: Extensible pattern for adding new commands
- **Service Pattern**: Encapsulated API interactions
- **Output Organization**: Timestamped, categorized file storage

## Setup

### Prerequisites

- Node.js v18+ 
- npm or yarn
- API Keys:
  - [OpenAI API Key](https://platform.openai.com/api-keys)
  - [Google Gemini API Key](https://aistudio.google.com/app/apikey)

### Installation

```bash
# Install dependencies
npm install

# Configure environment variables
# Edit .env and add your API keys:
# OPENAI_API_KEY=your_key_here
# GEMINI_API_KEY=your_key_here
```

## Usage

### List Available Commands

```bash
npm start
```

### Web Search Command

Search and analyze with OpenAI:

```bash
npm start web-search "What are the latest developments in AI?"
```

**Output:**
- Prints analysis to console
- Saves response to `references/[query]-[timestamp].md`

### Gemini Command

Get feedback from Google Gemini:

```bash
npm start gemini "Explain quantum computing in simple terms"
```

**Output:**
- Prints response to console
- Saves to `references/ai_feedback/[prompt]-[timestamp].md`

### Image Generate Command

Create images with DALL-E (supports multiple sizes):

```bash
# Default size (1024x1024 - square)
npm start image-generate "A serene mountain landscape at sunset"

# Landscape format (1792x1024 - wide)
npm start image-generate "A cinematic landscape" --size 1792x1024

# Portrait format (1024x1792 - tall)
npm start image-generate "A portrait scene" --size 1024x1792
```

**Output:**
- Saves generated image to `images/[prompt]-[size]-[timestamp].png`
- Logs metadata (prompt, size, URL, filename) to console

**See [IMAGE_GENERATION_WORKFLOW.md](IMAGE_GENERATION_WORKFLOW.md) for:**
- Detailed prompt engineering techniques
- Examples of vague → clear → excellent prompts
- Iteration strategies for refining outputs
- Best practices for photorealism, fantasy, sci-fi styles

## Development

### Build TypeScript

```bash
npm run build
```

### Linting

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

### Clean Build Files

```bash
npm run clean
```

## Adding New Commands

To add a new command:

1. Create a new file in `src/commands/`:

```typescript
import { Command } from '../utils/registry';

export class MyCommand implements Command {
  name = 'my-command';
  description = 'What my command does';

  async execute(args: string[]): Promise<void> {
    // Implementation
  }
}
```

2. Register it in `src/index.ts`:

```typescript
import { MyCommand } from './commands/my-command';

registry.register(new MyCommand());
```

## Documentation

- [IMAGE_GENERATION_WORKFLOW.md](IMAGE_GENERATION_WORKFLOW.md) - Complete guide to prompt engineering and iterative refinement
- [EXAMPLE_PROMPTS.md](EXAMPLE_PROMPTS.md) - Curated prompts organized by category with evolution examples

## Troubleshooting

### API Key Not Found

Ensure `.env` file exists in the project root with valid API keys:

```bash
cat .env
# Should show:
# OPENAI_API_KEY=sk-...
# GEMINI_API_KEY=AIzaSy...
```

### Command Not Found

Run `npm start` to see list of available commands.

### File Permission Errors

Ensure `references/` and `images/` directories are writable:

```bash
chmod 755 references/ images/
```

## Project Workflow

1. **Define Architecture**: Use command registry pattern for extensibility
2. **Scaffold Project**: TypeScript + ESLint + Prettier setup
3. **Implement Services**: API wrappers for OpenAI and Gemini
4. **Create Commands**: User-facing CLI commands
5. **Organize Output**: Automatic categorization of results
6. **Document**: Clear README and inline comments
7. **Iterate**: Review outputs, refine based on usage patterns

## Reflection Questions

- Where did the tool fail on first run?
- What constraint would have prevented that failure?
- What output organization rule helped you debug faster?

## License

MIT
