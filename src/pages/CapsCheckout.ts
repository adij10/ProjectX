import { CapsBase } from "./CapsBase";

export class CapsCheckout extends CapsBase{
  private firstNameField = '[data-test="firstName"]';
  private lastNameField = '[data-test="lastName"]';
  private postalCodeField = '[data-test="postalCode"]';
  private continueButton = '[data-test="continue"]';
  private finishButton = '[data-test="finish"]';
  private checkoutButton = '[data-test="checkout"]';

  async fillCheckoutDetails(firstName: string, lastName: string, postalCode: string): Promise<void> {
    
    await this.focus(this.checkoutButton);
    await this.click(this.checkoutButton);
    await this.fill(this.firstNameField, firstName);
    await this.fill(this.lastNameField, lastName);
    await this.fill(this.postalCodeField, postalCode);
    await this.highlight(this.continueButton);
    await this.click(this.continueButton);
  }

  async finishCheckout(): Promise<void> {
    await this.click(this.finishButton);
  }
}
