// Scénario : Filtrer les posts par auteur
const visit = async (page) => {
  await page.goto('', {
    waitUntil: 'networkidle',
  });
  await page.waitForTimeout(5000);
  
  const authorValue = await page.$eval('#author-select', (select) => {
    const options = Array.from(select.options);
    return options[8].value;
  });
  
  if (authorValue) {
    await page.select('#author-select', authorValue);
    await page.waitForNetworkIdle();
    await page.waitForTimeout(5000);
  
    await page.scrollToEnd();
    await page.waitForTimeout(3000);
  }
};

module.exports = visit;