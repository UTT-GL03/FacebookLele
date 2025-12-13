// Scénario : Filtrer les posts par auteur
const visit = async (page) => {
  await page.goto('', {
    waitUntil: 'networkidle',
  });
  await page.waitForTimeout(5000);
  
  await page.evaluate(() => {
    const select = document.querySelector('#author-select');
    if (select && select.options.length > 8) {
      select.value = select.options[8].value;
      // Déclencher l'événement change pour que React détecte le changement
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });

  await page.waitForNetworkIdle();
  await page.waitForTimeout(5000);
  await page.scrollToEnd();
  await page.waitForTimeout(3000);
};

module.exports = visit;