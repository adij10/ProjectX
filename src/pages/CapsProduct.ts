import { CapsBase } from "./CapsBase";

export class CapsProduct extends CapsBase {
  private sortDropdown = '[data-test="product-sort-container"]';
  private addToCartButton = '[data-test="add-to-cart-sauce-labs-onesie"]';
  private shoppingCartLink = '[data-test="shopping-cart-link"]';

  async sortProducts(option: string): Promise<void> {
    await this.selectOption(this.sortDropdown, option);
  }

  async addToCart(): Promise<void> {
    await this.scrollToBottom();
    await this.click(this.addToCartButton);
    await this.scrollToTop();

  }

  async goToCart(): Promise<void> {
    await this.click(this.shoppingCartLink);
  }
}
