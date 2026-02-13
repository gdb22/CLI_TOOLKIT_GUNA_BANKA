import { Command } from '../utils/registry';
import { saveImage, sanitizeFilename, getTimestamp } from '../utils/helpers';
import { ImgurUploader } from '../services/uploader';
import { GeminiService } from '../services/gemini';
import { chromium } from 'playwright';

export class ScreenshotCommand implements Command {
  name = 'screenshot';
  description = 'Take a screenshot of a URL and send to Gemini for design feedback';

  async execute(args: string[]): Promise<void> {
    if (args.length === 0) {
      console.error('❌ Usage: screenshot <url> [--wait 1000]');
      process.exit(1);
    }

    const url = args[0];
    const timestamp = getTimestamp();
    const filenameBase = sanitizeFilename(url + '-' + timestamp);
    const filename = `${filenameBase}.png`;

    console.log(`📷 Launching browser to capture: ${url}`);

    const browser = await chromium.launch();
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await context.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });
    const buffer = await page.screenshot({ fullPage: true });
    await browser.close();

    saveImage(filename, buffer);

    console.log('☁️ Uploading screenshot to Imgur...');
    const uploader = new ImgurUploader();
    const imageUrl = await uploader.upload(buffer);

    console.log(`🔗 Image URL: ${imageUrl}`);

    const gemini = new GeminiService();
    const prompt = `Please provide design feedback for the following webpage. Focus on layout, visual hierarchy, accessibility, color contrast, and suggested improvements. Image: ${imageUrl}`;
    console.log('🤖 Sending image + prompt to Gemini for feedback...');
    const feedback = await gemini.generateContent(prompt);

    console.log('\n📝 Gemini feedback:\n');
    console.log(feedback);

    // Save reference
    const content = `# Gemini Screenshot Feedback\n\n**URL:** ${url}\n**Image:** ${imageUrl}\n\n## Feedback\n\n${feedback}`;
    const refFilename = `${filenameBase}-feedback.md`;
    const fs = await import('fs');
    const path = await import('path');
    const refDir = path.join(process.cwd(), 'references');
    if (!fs.existsSync(refDir)) fs.mkdirSync(refDir, { recursive: true });
    fs.writeFileSync(path.join(refDir, refFilename), content, 'utf-8');
    console.log(`✓ Saved feedback: ${path.join(refDir, refFilename)}`);
  }
}
