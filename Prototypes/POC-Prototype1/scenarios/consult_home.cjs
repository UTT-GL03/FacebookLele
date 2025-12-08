const visit = async (page) => {
  await page.goto('/', {
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

/*
module.exports = async function (page) {
  await page.goto('http://host.docker.internal/', {
    waitUntil: 'networkidle',
  });

  await page.waitForTimeout(3000);
  
  // Nombre de scrolls (ajuste selon ton app)
  const SCROLL_STEPS = 15;
  const SCROLL_DELAY = 1500; // ms

  for (let i = 0; i < SCROLL_STEPS; i++) {
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight * 0.9);
    });

    await page.waitForNetworkIdle();
    await page.waitForTimeout(SCROLL_DELAY);
  }

  await page.waitForNetworkIdle();
  await page.waitForTimeout(2000);
};
*/