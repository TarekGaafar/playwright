import { test as baseTest, expect, Page } from "@playwright/test";
import { RegistrationPage } from "../pages/registrationPage";
import { LoginPage } from "../pages/loginPage";
import { DatabaseActions } from "./db-actions";
import envSetup from "../utilities/envSetup.ts";
import sql from "mssql";
let pool: sql.ConnectionPool;

// Define the type for the fixtures
interface Fixtures {
  loginPage: LoginPage;
  registrationPage: RegistrationPage;
  databaseActions: DatabaseActions;
  page:Page;
}

const extendTest = baseTest.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
  databaseActions: async ({}, use) => {
    await use(new DatabaseActions());
  },
});



export class POM {
  page: Page;
loginPage:LoginPage;
registrationPage:RegistrationPage;
databaseActions:DatabaseActions;
  constructor(page:Page){
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.registrationPage = new RegistrationPage(this.page);
    this.databaseActions = new DatabaseActions();
  }
   createLoginObject(){
    return this.loginPage;
  }
  createRegistrationPageObject(){
    return this.registrationPage;
  }
  createDatabaseActionsObject(){
    return this.databaseActions;
  }

}

extendTest.beforeAll(async () => {
  pool = await sql.connect(envSetup.configDB());
  console.log('Database connected succefully ....');
});




export const test = extendTest;
export { expect, envSetup, sql };
