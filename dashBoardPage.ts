import { Page } from "@playwright/test";

export default class DashboardPage {
  page: Page;
  locPunchIn = "//button[@id='startButton']";
  locStartBreak = "//button[@id='breakButton']";
  locPunchOut = "//button[@id='stopButton']";

  constructor(page: Page) {
    this.page = page;
  }

  async clickOnLogin() {
    await this.page.locator(this.locPunchIn).click();
  }

  async clickOnBreak() {
    await this.page.locator(this.locStartBreak).click();
  }

  async clickOnLogout() {
    await this.page.locator(this.locPunchOut).click();
  }
}
