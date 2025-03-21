import { expect, Locator, Page } from "@playwright/test";

export class ProductDetailPage {
  readonly page: Page;
  readonly fullNameInput: Locator;
  readonly phoneNumberInput: Locator;
  readonly confirmOrderButton: Locator;
  readonly invalidCustomerDetails: { fullName: string; phoneNumber: string };
  readonly validCustomerDetails: { fullName: string; phoneNumber: string };

  constructor(page: Page) {
    this.page = page;
    this.fullNameInput = this.page.getByRole("textbox", { name: "Full Name" });
    this.phoneNumberInput = this.page.getByRole("textbox", {
      name: "Phone Number",
    });
    this.confirmOrderButton = this.page.getByRole("button", {
      name: "ยืนยันคำสั่งซื้อ",
    });
    this.invalidCustomerDetails = {
      fullName: "",
      phoneNumber: "",
    };
    this.validCustomerDetails = {
      fullName: "First",
      phoneNumber: "0875551234",
    };
  }

  async goToProductDetailPage() {
    await this.page.goto("http://localhost:3000/products/14");
  }

  async displayProductTitle() {
    await expect(this.page.getByText("ดินสอ")).toBeVisible();
  }

  async displayProductPrice() {
    await expect(this.page.getByText("10.00 ฿")).toBeVisible();
  }

  async displayProductImage() {
    await expect(this.page.getByRole("img", { name: "ดินสอ" })).toBeVisible();
  }

  async fillValidCustomerInformation(fullName: string, phoneNumber: string) {
    this.setCustomerDetails(fullName, phoneNumber);
    await this.fullNameInput.fill(fullName);
    await this.phoneNumberInput.fill(phoneNumber);
  }

  setCustomerDetails(fullName: string, phoneNumber: string) {
    this.validCustomerDetails.fullName = fullName;
    this.validCustomerDetails.phoneNumber = phoneNumber;
  }

  async fillInvalidCustomerInformation() {
    await this.fullNameInput.fill("");
    await this.phoneNumberInput.fill("");
  }

  async clickConfirmOrderButton() {
    await this.confirmOrderButton.click();
  }

  async displayThankYouMessage() {
    await expect(this.page.getByTestId("confirmed-message")).toHaveText(
      `ขอบคุณ ${this.validCustomerDetails.fullName}`
    );
  }

  async notDisplayThankYouMessage() {
    await expect(this.page.getByTestId("confirmed-message")).not.toBeVisible();
  }
}
