import * as fs from 'fs';
import * as path from 'path';

export const ensureDirectory = (dir: string): void => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

export const getTimestamp = (): string => {
  const now = new Date();
  return now.toISOString().replace(/[:.]/g, '-').slice(0, -5);
};

export const saveReference = (
  filename: string,
  content: string,
  subdir?: string
): string => {
  const referenceDir = path.join(
    process.cwd(),
    'references',
    subdir || ''
  );
  ensureDirectory(referenceDir);

  const filepath = path.join(referenceDir, filename);
  fs.writeFileSync(filepath, content, 'utf-8');
  console.log(`✓ Saved: ${filepath}`);
  return filepath;
};

export const saveImage = (
  filename: string,
  buffer: Buffer
): string => {
  const imageDir = path.join(process.cwd(), 'images');
  ensureDirectory(imageDir);

  const filepath = path.join(imageDir, filename);
  fs.writeFileSync(filepath, buffer);
  console.log(`✓ Image saved: ${filepath}`);
  return filepath;
};

export const sanitizeFilename = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 50);
};
