import { test, expect } from "@playwright/test";

// Importing all required pages from POM
import loginPage from "../pages/loginPage";
import BasePage from "../pages/basepage";
import DashboardPage from "../pages/dashboardPage";

//importing testdata's
const testData = JSON.parse(JSON.stringify(require("../testData.json")));

// Test --URL
const testURL = testData.baseUrl.DEVurl; //Testing dev

// Test --User Credential
const testUserMail = testData.admin.credential1.mail; //Testing with Admin Credentials
const testUserPassword = testData.admin.credential1.password;

test("Positive login flow", async ({ page }) => {
  const login = new loginPage(page);
  const dashboard = new DashboardPage(page);
  const base = new BasePage(page);

  await base.waitTillNetworkIdle();
  await login.goToLoginPage(testURL);
  await login.loginWithEmailAndPassword(testUserMail, testUserPassword);
  //await dashboard.clickOnLogin();
});

test("elements", async ({ page }) => {
  const login = new loginPage(page);
  const dashboard = new DashboardPage(page);
  const base = new BasePage(page);

  await base.waitTillNetworkIdle();
  await login.goToLoginPage(testURL);
  await login.loginWithEmailAndPassword(testUserMail, testUserPassword);
  await login.checkingIconIsDisplayed();
});
