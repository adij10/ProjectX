import { CapsBase } from "../pages/CapsBase";

export class CapsLogin extends CapsBase {
  private usernameField = '[data-test="username"]';
  private passwordField = '[data-test="password"]';
  private loginButton = '[data-test="login-button"]';

  async login(username: string, password: string): Promise<void> {
    await this.fill(this.usernameField, username);
    await this.fill(this.passwordField, password);
    await this.click(this.loginButton);
  }
}
