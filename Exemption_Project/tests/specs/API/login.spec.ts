import { test, expect , request} from "@playwright/test";
import envSetup from "../../utilities/envSetup";
import { LoginPage } from "../../pages/loginPage";
let loginPage: LoginPage;

test.beforeEach("Initiate test data", async ({ page }) => {

});

test.describe("Login", () => {

  const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";


  test('API request with Playwright', async () => {
    const apiUrl = 'https://saberexemption-identity.aks.thiqah.sa/connect/token';
    const headers = {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'ar-SA',
      'captchahiddenvalue': '64BEB935-FDA5-4D27-86F6-1F422D4F6632',
      'captchaid': '9cbc842c-4f44-4e0a-9f32-79abf1cf8cdd',
      'captchavalue': '000000',
      'content-type': 'application/x-www-form-urlencoded',
      'origin': 'https://saberexemption-portal.aks.thiqah.sa',
      'priority': 'u=1, i',
      'referer': 'https://saberexemption-portal.aks.thiqah.sa/',
      'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0'
    };
  
    const data = new URLSearchParams({
      'grant_type': 'password',
      'scope': 'SaberExemptions offline_access',
      'username': 'tarek@thiqa.comw',
      'password': 'Aa@12345',
      'client_id': 'SaberExemptions_App',
      'client_secret': '1q2w3e*'
    });
  
    const apiRequestContext = await request.newContext();
    const response = await apiRequestContext.post(apiUrl, {
      headers: headers,
      data: data.toString()
    });
  
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);

    if (responseBody.access_token) {
      console.log('Access Token:', responseBody.access_token);
    } else {
      console.error('Access token not found in response:', responseBody);
    }
  });


 
  
});
