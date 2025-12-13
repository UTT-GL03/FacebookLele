const visit = async (page) => {
  await page.goto('', {
    waitUntil: 'networkidle',
  });

  await page.waitForTimeout(8000);

  const scrollStep = 1000; // pixels à scroller par étape
  const scrollTimes = 10;   // nombre de scrolls
  for (let i = 0; i < scrollTimes; i++) {
    await page.evaluate((step) => {
      window.scrollBy(0, step);
    }, scrollStep);
    await page.waitForTimeout(1000);
  }

  await page.waitForNetworkIdle();
  await page.waitForTimeout(7000);
};

module.exports = visit;