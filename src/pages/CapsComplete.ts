import { CapsBase } from './CapsBase';

export class CapsCompleteC extends CapsBase {
  private completeHeader = '[data-test="complete-header"]';
  private backToProductsButton = '[data-test="back-to-products"]';

  async getCompletionMessage(): Promise<string> {
    return await this.getText(this.completeHeader);
  }

  async backToProducts(): Promise<void> {
    await this.click(this.backToProductsButton);
  }
}
