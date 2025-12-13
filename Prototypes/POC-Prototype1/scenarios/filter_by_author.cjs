// Scénario : Filtrer les posts par auteur
const visit = async (page) => {
  // 1. Charger la page d'accueil avec tous les posts
  await page.goto('/', {
    waitUntil: 'networkidle',
  });
  await page.waitForTimeout(5000);
  
  await page.scrollToEnd();
  await page.waitForNetworkIdle();
  await page.waitForTimeout(3000);

  await page.select('#author-select', 'Haley Pleiman');
  await page.waitForNetworkIdle();
  await page.waitForTimeout(5000);
  
  await page.scrollToEnd();
  await page.waitForTimeout(3000);
};

module.exports = visit;