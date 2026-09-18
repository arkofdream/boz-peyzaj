import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER_LOG:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER_ERROR:', error.message));

  console.log('Navigating to vercel app...');
  await page.goto('https://boz-peyzaj.vercel.app/', { waitUntil: 'networkidle0' });
  
  await browser.close();
})();
