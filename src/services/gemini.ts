import axios from 'axios';

export interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

export class GeminiService {
  private apiKey: string;
  private baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models';

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.GEMINI_API_KEY || '';
    if (!this.apiKey) {
      throw new Error('GEMINI_API_KEY not configured');
    }
  }

  async generateContent(prompt: string): Promise<string> {
    try {
      const response = await axios.post(
        `${this.baseUrl}/gemini-1.5-pro:generateContent?key=${this.apiKey}`,
        {
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }
      );

      const data = response.data as GeminiResponse;
      if (data.candidates && data.candidates[0]) {
        return data.candidates[0].content.parts[0]?.text || '';
      }
      return '';
    } catch (error) {
      console.error('Gemini API Error:', error);
      throw error;
    }
  }
}
