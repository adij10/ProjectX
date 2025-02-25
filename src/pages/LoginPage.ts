import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to the login page
  async navigate() {
    await this.page.goto('https://qa-practice.netlify.app/auth_ecommerce');
  }

  // Perform login action
  async login(email: string, password: string) {
  await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
  await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  // Logout
  async logout() {
    await this.page.getByRole('link', { name: 'Log Out' }).click();
  }
}
