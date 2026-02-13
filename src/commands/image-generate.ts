import { Command } from '../utils/registry';
import { OpenAIService } from '../services/openai';
import { saveImage, sanitizeFilename, getTimestamp } from '../utils/helpers';
import { parseArgs, getFlag } from '../utils/args';
import axios from 'axios';

export class ImageGenerateCommand implements Command {
  name = 'image-generate';
  description = 'Generate images with DALL-E (supports --size flag)';

  async execute(args: string[]): Promise<void> {
    if (args.length === 0) {
      console.error('❌ Usage: image-generate <prompt> [--size 1024x1024|1792x1024|1024x1792]');
      console.error('Example: image-generate "A cinematic lighthouse in a storm" --size 1024x1024');
      process.exit(1);
    }

    const parsed = parseArgs(args);
    
    if (parsed.params.length === 0) {
      console.error('❌ Prompt is required');
      process.exit(1);
    }

    const prompt = parsed.params.join(' ');
    const sizeFlag = getFlag(parsed.flags, 'size') || '1024x1024';
    
    // Validate size
    const validSizes = ['1024x1024', '1792x1024', '1024x1792'];
    const size = validSizes.includes(sizeFlag)
      ? (sizeFlag as '1024x1024' | '1792x1024' | '1024x1792')
      : '1024x1024';

    if (sizeFlag !== size) {
      console.warn(`⚠️  Invalid size "${sizeFlag}". Using default: 1024x1024`);
    }

    console.log(`🎨 Generating image (${size})...`);
    console.log(`📝 Prompt: ${prompt}`);

    const service = new OpenAIService();
    const imageUrl = await service.generateImage(prompt, size);

    console.log(`\n✨ Image URL: ${imageUrl}`);

    // Download the image
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data);

    const timestamp = getTimestamp();
    const filename = `${sanitizeFilename(prompt)}-${size}-${timestamp}.png`;
    saveImage(filename, imageBuffer);

    // Save metadata
    const metadata = {
      prompt,
      size,
      timestamp,
      url: imageUrl,
      filename,
    };
    
    console.log('\n📊 Metadata:', JSON.stringify(metadata, null, 2));
  }
}
