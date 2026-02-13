import axios from 'axios';

export interface SerpResult {
  title: string;
  snippet: string;
  link: string;
}

export class SerpService {
  private apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.SERPAPI_API_KEY || '';
    if (!this.apiKey) {
      throw new Error('SERPAPI_API_KEY not configured');
    }
  }

  async search(query: string, num = 5): Promise<SerpResult[]> {
    const url = 'https://serpapi.com/search.json';

    const response = await axios.get(url, {
      params: {
        q: query,
        api_key: this.apiKey,
        num,
      },
    });

    const data = response.data || {};
    const organic = data.organic_results || [];

    const results: SerpResult[] = organic.slice(0, num).map((r: any) => ({
      title: r.title || r.position?.toString() || '',
      snippet: r.snippet || r.excerpt || '',
      link: r.link || r.url || '',
    }));

    return results;
  }
}
