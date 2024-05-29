import { test, expect } from "@playwright/test";

// Importing all required pages from POM
import loginPage from "../pages/loginPage";
import BasePage from "../pages/basepage";
import DashboardPage from "../pages/dashboardPage";

//importing testdata's
const testData = JSON.parse(JSON.stringify(require("../testData.json")));

// Test --URL
const testURL = testData.baseUrl.DEVurl; //Testing Dev env.

// Test --User Credential
const testUserMail = testData.admin.credential2.mail; //Testing with Admin Credential
const testUserPassword = testData.admin.credential2.password;

// test("LoginScript", async ({ page }) => {
//   const login = new loginPage(page);
//   const dashboard = new DashboardPage(page);
//   const base = new BasePage(page);

//   await base.waitTillNetworkIdle();
//   await login.goToLoginPage(testURL);
//   await login.loginWithEmailAndPassword(testUserMail, testUserPassword);
//   await login.clickingOnLoginBtn();
// });

// test("testing elements", async ({ page }) => {
//   const login = new loginPage(page);
//   const dashboard = new DashboardPage(page);
//   const base = new BasePage(page);

//   await base.waitTillNetworkIdle();
//   await login.goToLoginPage(testURL);
//   await login.loginWithEmailAndPassword(testUserMail, testUserPassword);
//   await login.checkingIconIsDisplayed();
//   await login.checkingForgotPasswordTextIsPresent();
//   await login.clickingOnForgotPassword();
//   await base.waitUntil05SecondsExplicitly();
// });

test("testing negative flows", async ({ page }) => {
  const login = new loginPage(page);
  const dashboard = new DashboardPage(page);
  const base = new BasePage(page);

  await base.waitTillNetworkIdle();
  await login.goToLoginPage(testURL);
  await login.loginWithNoEmailAndNoPassword(testUserMail, testUserPassword);
  await base.waitUntil05SecondsExplicitly();
  await login.loginWithWrongEmailAndWrongPassword(
    testUserMail,
    testUserPassword
  );
  await base.waitUntil05SecondsExplicitly();
});
