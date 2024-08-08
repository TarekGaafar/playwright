import { test, expect, request } from "@playwright/test";
import envSetup from "../../../../utilities/envSetup.ts";
import { LoginPage } from "../../../../pages/loginPage";
let loginPage: LoginPage;

test.beforeEach("Initiate test data", async ({ page }) => {
  await page.goto(envSetup.getEnvURL());
  loginPage = new LoginPage(page);
});

test.describe("Login", () => {
  test("sucessfull scenario", async ({}) => {
    await loginPage.login(
      envSetup.getTestData().user,
      envSetup.getTestData().password,
      envSetup.getTestData().captchaValue
    );
    await expect(loginPage.homePath).toBeVisible();
  });
  test("faild scenario", async ({}) => {
    await loginPage.login(
      envSetup.getTestData().user,
      envSetup.getTestData().password,
      envSetup.getTestData().captchaValue
    );
    await expect(loginPage.homePath).toBeVisible();
  });
});

test.describe("forget password", () => {
  test("sucessfull scenario", async ({}) => {
    await loginPage.login(
      envSetup.getTestData().user,
      envSetup.getTestData().password,
      envSetup.getTestData().captchaValue
    );
    await expect(loginPage.homePath).toBeVisible();
  });
});
