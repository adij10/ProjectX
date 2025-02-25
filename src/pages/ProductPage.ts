import { expect, Page } from '@playwright/test';

export class ProductPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Verify product is in cart
  async verifyProductInCart() {

    await expect(this.page.getByText('Samsung Galaxy A32, 128GB, White')).toBeVisible();
  }

  // Add product to the cart
  async addProductToCart() {
    await this.page.getByRole('button', { name: 'ADD TO CART' }).nth(2).click();
  }

  // Verify shopping cart
  async verifyShoppingCart() {
    await expect(this.page.locator('#prooood')).toContainText('SHOPPING CART');
  }

  // Proceed to checkout
  async proceedToCheckout() {
    await this.page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
  }
}
