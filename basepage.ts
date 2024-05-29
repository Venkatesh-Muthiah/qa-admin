import { Page } from "@playwright/test";

export default class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitTillNetworkIdle() {
    await this.page.waitForLoadState("networkidle");
  }

  async waitUntil05SecondsExplicitly() {
    await this.page.waitForTimeout(5000);
  }

  async waitUntil10SecondsExplicitly() {
    await this.page.waitForTimeout(10000);
  }

  async waitUntil20SecondsExplicitly() {
    await this.page.waitForTimeout(20000);
  }

  async waitUntil30SecondsExplicitly() {
    await this.page.waitForTimeout(30000);
  }
}
