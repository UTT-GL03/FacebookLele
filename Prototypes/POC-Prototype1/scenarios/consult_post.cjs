// Scénario : Consulter un post spécifique
const visit = async (page) => {
  await page.goto('/post/26', {
    waitUntil: 'networkidle',
  });
  await page.waitForTimeout(10000);
  await page.scrollToEnd();
  await page.waitForNetworkIdle();
  await page.waitForTimeout(7000);
};

module.exports = visit;
/*
module.exports = async function (page) {
  await page.goto('http://host.docker.internal/post/26', {
    waitUntil: 'networkidle',
  });

  await page.waitForTimeout(10000);
  await page.scrollToEnd();
  await page.waitForNetworkIdle();
  await page.waitForTimeout(7000);
};
*/