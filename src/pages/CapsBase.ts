import { Page } from 'playwright';

export class CapsBase {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Click on an element
  async click(selector: string): Promise<void> {
    await this.page.locator(selector).click();
  }

  // Fill an input field
  async fill(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).fill(value);
  }

  // Get text content of an element
  async getText(selector: string): Promise<string> {
    return await this.page.locator(selector).textContent() || '';
  }

  // Wait for an element to be visible
  async waitForVisibility(selector: string): Promise<void> {
    await this.page.locator(selector).waitFor();
  }

  // Select an option in a dropdown
  async selectOption(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).selectOption(value);
  }

  // Assert if an element is visible
  async isVisible(selector: string): Promise<boolean> {
    return await this.page.locator(selector).isVisible();
  }

  async focus(selector: string): Promise<void> {
    await this.page.locator(selector).focus();
  }

  async highlight(selector: string): Promise<void> {
    await this.page.locator(selector).highlight();
  }

  async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  async scrollToTop(): Promise<void> {
    await this.page.evaluate(() => { 
      window.scrollTo(0, 0);
    });
  }
}
