import { Command } from '../utils/registry';
import { OpenAIService } from '../services/openai';
import { SerpService } from '../services/serp';
import { saveReference, getTimestamp, sanitizeFilename } from '../utils/helpers';

export class WebSearchCommand implements Command {
  name = 'web-search';
  description = 'Search and analyze with OpenAI';

  async execute(args: string[]): Promise<void> {
    if (args.length === 0) {
      console.error('❌ Usage: web-search <query>');
      process.exit(1);
    }

    const query = args.join(' ');
    console.log(`🔍 Searching for: ${query}`);

    const serp = new SerpService();
    const results = await serp.search(query, 5);

    const resultsText = results
      .map((r, i) => `Result ${i + 1}: ${r.title}\n${r.snippet}\n${r.link}`)
      .join('\n\n');

    console.log('\n📄 Top search results:');
    results.forEach((r, i) => console.log(`${i + 1}. ${r.title} - ${r.link}`));

    const service = new OpenAIService();
    const prompt = `You are a research assistant. Summarize and synthesize findings for the query "${query}". Provide key points, concise summary, and list sources.\n\nSearch Results:\n${resultsText}`;

    const response = await service.webSearch(prompt);

    console.log('\n📋 Response:');
    console.log(response);

    const timestamp = getTimestamp();
    const filename = `${sanitizeFilename(query)}-${timestamp}.md`;
    const content = `# Search Results\n\n**Query:** ${query}\n\n## Top Results\n\n${resultsText}\n\n## Summary\n\n${response}`;

    saveReference(filename, content);
  }
}
