import { expect, Page } from '@playwright/test';

export class CheckoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Fill in phone number
  async fillPhoneNumber(phoneNumber: string) {
    await this.page.getByRole('textbox', { name: 'Enter phone number' }).fill(phoneNumber);
  }

  // Fill in address
  async fillAddress(address: string) {
    
    await this.page.getByRole('textbox', { name: 'Little Streets' }).fill(address);
  }

  // Fill in city
  async fillCity(city: string) {
    await this.page.getByRole('textbox', { name: 'London' }).click();
    await this.page.getByRole('textbox', { name: 'London' }).fill(city);
  }

  // Select country
  async selectCountry(country: string) {
    await this.page.locator('#countries_dropdown_menu').selectOption({ label: country });
  }

  // Submit the order
  async submitOrder() {
    await this.page.getByRole('button', { name: 'Submit Order' }).click();
  }

  // Verify order confirmation message
  async verifyOrderMessage() {
    await expect(this.page.locator('#message')).toContainText('Congrats! Your order');
  }
}
