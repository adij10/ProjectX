import { test, expect, Page } from '@playwright/test';
import { CapsLogin } from '../pages/CapsLogin';
import { CapsCompleteC } from '../pages/CapsComplete';
import { CapsCheckout } from '../pages/CapsCheckout';
import { CapsProduct } from '../pages/CapsProduct';
import { faker } from '@faker-js/faker'; 

test('Test checkout flow', async ({ page }) => {
  const loginPage = new CapsLogin(page);
  const productPage = new CapsProduct(page);
  const checkoutPage = new CapsCheckout(page);
  const completePage = new CapsCompleteC(page);

  // Navigate to the login page and login
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');

  // Interact with product page
  await productPage.sortProducts('hilo');
  await productPage.addToCart();
  await productPage.goToCart();

  // Perform checkout process
  await checkoutPage.fillCheckoutDetails(faker.name.firstName(), faker.name.lastName(),faker.address.zipCode());
  await checkoutPage.finishCheckout();

  // Assert order completion message
  const message = await completePage.getCompletionMessage();
  expect(message).toContain('Thank you for your order!');
  expect(await page.locator('[data-test="title"]').textContent()).toContain('Checkout: Complete!');

  // Go back to products page
  await completePage.backToProducts();
});
