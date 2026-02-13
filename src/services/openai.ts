import OpenAI from 'openai';

export class OpenAIService {
  private client: OpenAI;

  constructor(apiKey?: string) {
    this.client = new OpenAI({
      apiKey: apiKey || process.env.OPENAI_API_KEY,
    });
  }

  async webSearch(query: string): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: query,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    return response.choices[0].message.content || '';
  }

  async generateImage(
    prompt: string,
    size: '1024x1024' | '1792x1024' | '1024x1792' = '1024x1024'
  ): Promise<string> {
    const response = await this.client.images.generate({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: size,
      quality: 'standard',
    });

    return response.data?.[0]?.url || '';
  }
}
