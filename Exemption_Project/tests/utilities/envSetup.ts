import { FullConfig } from "@playwright/test";
import baseEnvUrl from "./URLs/baseURL";
import PreData from "../testData/preprodEnv.ts";
import testData from "../testData/testEnv.ts";
import sql from "mssql";
let sqlConfig: any;

//==================================//
function getBaseURL(config: FullConfig) {
  const { baseURL } = config.projects[0].use;
  return baseURL;
}

function getEnvURL() {
  const env = process.env.ENV!;
  console.log("Environment= " + env);
  if (env == "PreProd") {
    console.log("URL= " + baseEnvUrl.Preprod.uiBaseURL);

    return baseEnvUrl.Preprod.uiBaseURL;
  } else {
    console.log("URL= " + baseEnvUrl.test.uiBaseURL);

    return baseEnvUrl.test.uiBaseURL;
  }
}

function getTestData() {
  const env = process.env.ENV!;
  if (env == "PreProd") {
    return PreData;
  } else {
    return testData; //test
  }
}

function generateRandomNumberStartingWith(length:number,n:number) :number{
  const randomDigits = Math.floor(Math.random() * Math.pow(10, length - 1));
   const result = n + randomDigits.toString().padStart(length - 1, '0');
  return parseInt(result, 10);
}

function configDB():any{
  sqlConfig = {
    user: getTestData().DBuser,
    password: getTestData().DBpassword,
    server: getTestData().server,
    database:getTestData().databaseName ,
    port: getTestData().port,
    options: {
      encrypt: true,
      trustServerCertificate: true,
      
    },
    connectionTimeout: 30000, // 30 seconds

  };
  
  return sqlConfig;
}
function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default { wait,getBaseURL, getEnvURL, getTestData, generateRandomNumberStartingWith,configDB};
