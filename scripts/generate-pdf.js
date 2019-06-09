const puppeteer = require('puppeteer');

const route = process.argv[2];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const height = await page.evaluate(
    () => document.documentElement.offsetHeight
  );
  await page.goto(`http://localhost:3000/pdf/${route}`);
  await page.emulateMedia('screen');
  await page.pdf({
    path: './react.pdf', // path (relative to CWD) to save the PDF to.
    format: 'A4',
    printBackground: true, // print background colors
    height,
  });
  await browser.close();
})();
