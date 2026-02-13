import { Command } from '../utils/registry';
import { GeminiService } from '../services/gemini';
import { saveReference, getTimestamp, sanitizeFilename } from '../utils/helpers';

export class GeminiCommand implements Command {
  name = 'gemini';
  description = 'Get feedback from Google Gemini';

  async execute(args: string[]): Promise<void> {
    if (args.length === 0) {
      console.error('❌ Usage: gemini <prompt>');
      process.exit(1);
    }

    const prompt = args.join(' ');
    console.log(`🤖 Sending to Gemini: ${prompt}`);

    const service = new GeminiService();
    const response = await service.generateContent(prompt);

    console.log('\n📝 Gemini Response:');
    console.log(response);

    const timestamp = getTimestamp();
    const filename = `${sanitizeFilename(prompt)}-${timestamp}.md`;
    const content = `# Gemini Response\n\n**Prompt:** ${prompt}\n\n## Response\n\n${response}`;

    saveReference(filename, content, 'ai_feedback');
  }
}
