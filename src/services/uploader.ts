import axios from 'axios';
import FormData from 'form-data';

export class ImgurUploader {
  private clientId: string;

  constructor(clientId?: string) {
    this.clientId = clientId || process.env.IMGUR_CLIENT_ID || '';
    if (!this.clientId) {
      throw new Error('IMGUR_CLIENT_ID not configured');
    }
  }

  async upload(buffer: Buffer): Promise<string> {
    const form = new FormData();
    form.append('image', buffer.toString('base64'));

    const headers = form.getHeaders();
    headers.Authorization = `Client-ID ${this.clientId}`;

    const resp = await axios.post('https://api.imgur.com/3/image', form, {
      headers,
    });

    if (resp.data && resp.data.data && resp.data.data.link) {
      return resp.data.data.link;
    }
    throw new Error('Imgur upload failed');
  }
}
