import { test, expect } from '@playwright/test';

test('has title', async ({ page },testInfo) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  // await page.screenshot({ path: 'example.png' });
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
  // const video = await page.video();
  // await video.saveAs(`videos/${testInfo.title}_${testInfo.status}.mp4`);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const element= page.locator('#myElement');
  await element.waitFor({timeout: 5000 });

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
