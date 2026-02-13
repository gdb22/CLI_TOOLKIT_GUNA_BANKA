const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  try {
    const browser = await chromium.launch();
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await context.newPage();
    await page.goto('https://example.com', { waitUntil: 'networkidle' });
    const buffer = await page.screenshot({ fullPage: true });
    const outDir = 'images';
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const outPath = `${outDir}/playwright-test.png`;
    fs.writeFileSync(outPath, buffer);
    console.log(`✓ Screenshot saved to ${outPath}`);
    await browser.close();
    process.exit(0);
  } catch (err) {
    console.error('Playwright test failed:', err);
    process.exit(1);
  }
})();
