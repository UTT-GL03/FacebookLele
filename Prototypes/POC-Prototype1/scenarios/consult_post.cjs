// Scénario : Consulter un post spécifique
const visit = async (page) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  });
  await page.waitForTimeout(3000);

  const firstPostUrl = await page.$eval('a.post-link', link => link.getAttribute('href'));
  await page.goto(firstPostUrl, {
    waitUntil: 'networkidle',
  });

  await page.waitForTimeout(10000);
  await page.scrollToEnd();
  await page.waitForNetworkIdle();
  await page.waitForTimeout(7000);
};

module.exports = visit;