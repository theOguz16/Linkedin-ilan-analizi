const { test, expect } = require("@playwright/test");

test("Linkedin Login Test", async ({ page }) => {
  //Giriş yapma kısmı
  await page.goto("https://www.linkedin.com/login");

  await page.fill("input#username", "oguzhanuyar16@icloud.com");
  await page.fill("input#password", "Sifre16#");
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/linkedin\.com/);

  console.log("Başarıyla giriş yaptınız");

  //İş arama sayfasına gidip frontend sonucunu aratma
  await page.goto("https://www.linkedin.com/jobs/");
  await page.fill("input#jobs-search-box-keyword-id-ember27", "frontend");
  await page.press("input#jobs-search-box-keyword-id-ember27", "Enter");

  //Frontend alanında kaç sonuç var

  await page.waitForSelector("div.jobs-search-results-list__subtitle");
  let frontendText = await page.textContent(
    "div.jobs-search-results-list__subtitle"
  );

  // Textin içindeki gereksiz boşlukları ve kelimeleri temizle
  frontendText = frontendText.trim().replace(/\s+/g, " ").replace(" sonuç", "");

  // Texti konsola yazdır
  console.log(`Frontend alanında bulunan sonuç: ${frontendText}`);

  //İş arama sayfasına gidip backend sonucunu aratma
  await page.goto("https://www.linkedin.com/jobs/");
  await page.fill("input#jobs-search-box-keyword-id-ember27", "backend");
  await page.press("input#jobs-search-box-keyword-id-ember27", "Enter");

  //Backend alanında kaç sonuç var

  await page.waitForSelector("div.jobs-search-results-list__subtitle");
  let backendText = await page.textContent(
    "div.jobs-search-results-list__subtitle"
  );

  // Textin içindeki gereksiz boşlukları ve kelimeleri temizle
  backendText = backendText.trim().replace(/\s+/g, " ").replace(" sonuç", "");

  // Texti konsola yazdır
  console.log(`Backend alanında bulunan sonuç: ${backendText}`);

  //İş arama sayfasına gidip mobile developer sonucunu aratma
  await page.goto("https://www.linkedin.com/jobs/");
  await page.fill(
    "input#jobs-search-box-keyword-id-ember27",
    "mobile developer"
  );
  await page.press("input#jobs-search-box-keyword-id-ember27", "Enter");

  //Mobile developer alanında kaç sonuç var

  await page.waitForSelector("div.jobs-search-results-list__subtitle");
  let mobileText = await page.textContent(
    "div.jobs-search-results-list__subtitle"
  );

  // Textin içindeki gereksiz boşlukları ve kelimeleri temizle
  mobileText = mobileText.trim().replace(/\s+/g, " ").replace(" sonuç", "");

  // Texti konsola yazdır
  console.log(`Mobile Developer alanında bulunan sonuç: ${mobileText}`);
});
