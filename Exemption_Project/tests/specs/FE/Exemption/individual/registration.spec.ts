import * as fixtures from "../../../../utilities/objects-manager.ts";
let pom :fixtures.POM;
fixtures.test.beforeEach("Initiate test data", async ({ page }) => {
  await page.goto(fixtures.envSetup.getEnvURL());
pom = new fixtures.POM(page)
});

fixtures.test.describe("Registration", () => {
  fixtures.test(
    "sucessfull scenario",
    async ({}) => {
      await pom.createRegistrationPageObject().registrationMethod();

      await pom.createDatabaseActionsObject().emailConfirmation(
        fixtures.sql,
        pom.createRegistrationPageObject().Email
      );
      await pom.createLoginObject().userNavigatesToLandingPage(pom.page);
      await pom.createLoginObject().login(
        pom.createRegistrationPageObject().Email,
        fixtures.envSetup.getTestData().password,
        fixtures.envSetup.getTestData().captchaValue
      );
      await pom.createLoginObject().assertOnLoginProcessIsDoneSuccessfully();
    }
  );
   fixtures.test("DB  scenario", async ({ }) => {
    // await fixtures.sql.connect(fixtures.envSetup.configDB());
     await pom.createDatabaseActionsObject().DBExample(fixtures.sql);
  });
});
