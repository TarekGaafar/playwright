import { expect, type Locator, type Page } from "@playwright/test";
import envSetup from "../utilities/envSetup";

export class LoginPage {
  //===========================Locators=====================
  readonly page: Page;
  readonly userName: Locator;
  readonly password: Locator;
  readonly captchaValue: Locator;
  readonly loginButton: Locator;
  readonly homePath: Locator;

  //===========================Constructor=====================
  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator("#login-input-user-name-or-email-address");
    this.password = page.locator("#login-input-password");
    this.captchaValue = page.locator("#captcha-value");
    this.loginButton = page.locator(
      "//button[@class='btn btn-primary btn-block']"
    );
    this.homePath = page.locator("//i[@class='fa-duotone fa-house']");

    //  page.getByRole("button", {
    //   name: "Please select choice...",
    // });
  }
  //===========================Methods========================
async userNavigatesToLandingPage(page:Page){
  await page.goto(envSetup.getEnvURL());
  console.log("userNavigatesToLandingPage is Ended");


}
  async login(userName: string, password: string, captchaText: string) {
    console.log("loginMethod is started");

    await this.userName.fill(userName);
    await this.password.fill(password);
    await envSetup.wait(7000);
    await this.captchaValue.fill(captchaText);
    await envSetup.wait(7000);
    await this.loginButton.click();
    console.log("loginMethod is ended");

  }
  async assertOnLoginProcessIsDoneSuccessfully(){
    await expect(this.homePath).toBeVisible();
    console.log("assertOnLoginProcessIsDoneSuccessfully is done");
  }
}
