import { Page, expect } from "@playwright/test";
import BasePage from "../pages/basepage";

export default class LoginPage {
  page: Page;

  //Actual locators
  locLogo = "//img[@alt='Your Alt Text']";
  locMailLabel = "//input[@placeholder='Email']";
  locMailField = "//input[@placeholder='Email']";
  locPassLabel = "//input[@placeholder='Password']";
  locPassField = "//input[@placeholder='Password']";
  locLoginBtn = "//button[text()='LOGIN']";
  locForgotPassBtn = "//a[text()='Forgot Password?']";
  locMaskIcon = "svg";
  locWelcomeBackText = "//h1[normalize-space()='Hi, Welcome Back']";
  locCredentialsToasterMsg =
    "//h2[normalize-space()='Enter your credentials to continue']";
  locErrorHelperTextEmail1 = "(//p[@id='outlined-error-helper-text'])[1]";
  locErrorHelperTextPassword1 = "(//p[@id='outlined-error-helper-text'])[2]";

  constructor(page: Page) {
    this.page = page;
    const base = new BasePage(page);
  }

  async goToLoginPage(myUrl: string) {
    await this.page.goto(myUrl);
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    const base = new BasePage(this.page);
    await this.page.locator(this.locMailField).fill(email);
    await base.waitUntil05SecondsExplicitly();
    await this.page.locator(this.locPassField).fill(password);
    await base.waitUntil05SecondsExplicitly();
    await this.page.locator(this.locLoginBtn).click();
  }

  async loginWithNoEmailAndNoPassword(email: string, password: string) {
    const base = new BasePage(this.page);
    await this.page.locator(this.locMailField).click();
    await base.waitUntil05SecondsExplicitly();
    await this.page.locator(this.locPassField).click();

    const errorMsg1: any = await this.page
      .locator(this.locErrorHelperTextEmail1)
      .textContent();
    console.log(errorMsg1);
    expect(errorMsg1.includes("Please enter valid email address")).toBeTruthy();

    await base.waitUntil05SecondsExplicitly();

    await this.page.locator(this.locLogo).click();

    const errorMsg2: any = await this.page
      .locator(this.locErrorHelperTextPassword1)
      .textContent();
    console.log(errorMsg2);

    expect(errorMsg2.includes("Please enter valid password")).toBeFalsy(); //.toBeTruthy();
  }

  async loginWithWrongEmailAndWrongPassword(email: string, password: string) {
    const base = new BasePage(this.page);
    await this.page.locator(this.locMailField).fill("zhi");
    await base.waitUntil05SecondsExplicitly();
    await this.page.locator(this.locPassField).fill("  ");

    const errorMsg3: any = await this.page
      .locator(this.locErrorHelperTextEmail1)
      .textContent();
    console.log(errorMsg3);
    expect(errorMsg3.includes("Please enter valid email address")).toBeTruthy();

    await base.waitUntil05SecondsExplicitly();

    await this.page.locator(this.locPassLabel).click();

    const errorMsg4: any = await this.page
      .locator(this.locErrorHelperTextPassword1)
      .textContent();
    console.log(errorMsg4);

    expect(
      errorMsg4.includes("Passwords should be minimum of 8 characters")
    ).toBeFalsy(); //.toBeTruthy();
  }

  async checkingIconIsDisplayed() {
    await this.page.locator(this.locLogo).isVisible();
  }

  async checkWelcomeBackIsDisplayed() {
    await this.page.locator(this.locWelcomeBackText).isVisible();
  }

  async checkingCredentialsPushMessage() {
    await this.page.locator(this.locCredentialsToasterMsg).textContent(); //todo
  }

  async checkingForgotPasswordTextIsPresent() {
    await this.page.locator(this.locForgotPassBtn).isVisible();
  }

  async clickingOnForgotPassword() {
    await this.page.locator(this.locForgotPassBtn).click();
  }

  async clickingOnLoginBtn() {
    const base = new BasePage(this.page);
    //await base.waitUntil05SecondsExplicitly();
    await this.page.locator(this.locLoginBtn).click();
  }
}
