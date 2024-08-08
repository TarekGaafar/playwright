import { type Locator, type Page ,expect} from "@playwright/test";
import envSetup from "../utilities/envSetup";

export class RegistrationPage {
  //===========================Locators=====================
  readonly page: Page;
  readonly userName: Locator;
  readonly identificationNumber: Locator;
  readonly nextButton: Locator;
  readonly email: Locator;
  readonly emailComfirmation: Locator;
  readonly registrationButton: Locator;
  readonly Email: string;
  readonly password: Locator;
  readonly passwordConfirmation: Locator;
  readonly phone: Locator;
  readonly verify: Locator;
  readonly inputVerificationCode: Locator;
  readonly verificationButton : Locator;
  readonly postalCode : Locator;
  readonly address : Locator;
  readonly checkBox : Locator;
  readonly captchaValue : Locator;
  readonly submit : Locator;
  readonly success_icon : Locator;

  //===========================Constructor=====================
  constructor(page: Page) {
    this.page = page;

    this.registrationButton = page.locator(
      "//a[contains(@href, '/account/register')]"
    );
    this.userName = page.locator("#identificationName");
    this.identificationNumber = page.locator("#input-identification-number");
    this.nextButton = page.locator(
      '//button [@class="reg-wizard-btn float-right"]'
    );
    this.email = page.locator("#input-email-address");
    this.emailComfirmation = page.locator("#input-confirm-email-address");
    this.Email =
      "tarekgaafar" +
      envSetup.generateRandomNumberStartingWith(5, 1).toString() +
      "@thiqa.com";
    this.password = page.locator("#input-password");
    this.passwordConfirmation = page.locator("#input-confirm-password");
    this.phone = page.locator("#phone");
    this.verify = page.locator("//button[@class='btn-verify']");
    this.inputVerificationCode = page.locator("#input-verification-code");
    this.verificationButton = page.locator("//button[@class='btn btn-primary btn-block']");
    this.postalCode = page.locator("#input-postal-box");
    this.address = page.locator("#input-address");
    this.checkBox = page.locator("//span[@class='checkmark']");
    this.captchaValue = page.locator("#captcha-value");
    this.submit = page.locator("//button[@type='submit']");
    this.success_icon = page.locator('//span[@class="success-icon"]');
    //  page.getByRole("button", {
    //   name: "Please select choice...",
    // });
  }
  //===========================Methods========================

  async registrationMethod() {
    console.log("registrationMethod is started");
    await this.registrationButton.click();
    await this.page.selectOption("#select-user-type", "1"); //Mwaten is selected
    await this.identificationNumber.fill(
      envSetup.generateRandomNumberStartingWith(10, 1).toString()
    );
    await this.userName.fill("Tarek Gaafar");
    await this.page.locator('//label[@for="identificationName"]').click();
    await this.nextButton.click();
    await this.email.fill(this.Email);
    await this.emailComfirmation.fill(this.Email);
    await this.password.fill(envSetup.getTestData().password);
    await this.passwordConfirmation.fill(envSetup.getTestData().password);
    await this.phone.fill("540907657");
    await this.verify.click();
    await this.inputVerificationCode.fill('0000');
    await envSetup.wait(5000);
    await this.verificationButton.click();
    await this.postalCode.fill('12345');
    await this.address.fill("2 st maadi");
    await this.checkBox.check();
    await this.captchaValue.fill('000000');
    await this.submit.click();
    await expect(this.success_icon).toBeVisible();
    console.log("registrationMethod is Ended");



  }
  
}
