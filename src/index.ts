import dotenv from 'dotenv';
import { CommandRegistry } from './utils/registry';
import { WebSearchCommand } from './commands/web-search';
import { GeminiCommand } from './commands/gemini';
import { ImageGenerateCommand } from './commands/image-generate';
import { ScreenshotCommand } from './commands/screenshot';

dotenv.config();

const registry = new CommandRegistry();

// Register all commands
registry.register(new WebSearchCommand());
registry.register(new GeminiCommand());
registry.register(new ImageGenerateCommand());
registry.register(new ScreenshotCommand());

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('🚀 CLI AI Toolkit');
  registry.listCommands();
  process.exit(0);
}

const [command, ...commandArgs] = args;
registry.execute(command, commandArgs).catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
