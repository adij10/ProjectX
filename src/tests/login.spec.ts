import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LoginPage } from '../pages/LoginPage';


test('test', async ({ page }) => {
  // Instantiate the page objects
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Navigate to the login page
  await loginPage.navigate();
  
  // Perform login with credentials
  await loginPage.login('admin@admin.com', 'admin123');
  
  // Verify product is in cart and add it
  await productPage.verifyProductInCart();
  await productPage.addProductToCart();
  await productPage.verifyShoppingCart();
  await productPage.proceedToCheckout();
  
  // Fill in the checkout form
  await checkoutPage.fillPhoneNumber('9884846448');
  await checkoutPage.fillAddress('6th crosss');
  await checkoutPage.fillCity('Bangalore');
  await checkoutPage.selectCountry('India');
  
  // Submit the order and verify message
  await checkoutPage.submitOrder();
  await checkoutPage.verifyOrderMessage();
  
  // Log out
  await loginPage.logout();
});
