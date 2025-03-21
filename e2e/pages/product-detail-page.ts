import { expect, Locator, Page } from "@playwright/test";

export class ProductDetailPage {
  readonly page: Page;
  readonly fullNameInput: Locator;
  readonly phoneNumberInput: Locator;
  readonly confirmOrderButton: Locator;
  readonly validCustomerDetails: { fullName: string; phoneNumber: string };
  readonly invalidCustomerDetails: { fullName: string; phoneNumber: string };

  constructor(page: Page) {
    this.page = page;
    this.fullNameInput = this.page.getByRole("textbox", { name: "Full Name" });
    this.phoneNumberInput = this.page.getByRole("textbox", { name: "Phone Number" });
    this.confirmOrderButton = this.page.getByRole("button", { name: "ยืนยันคำสั่งซื้อ" });
    this.validCustomerDetails = {
        fullName: "John Doe",
        phoneNumber: "081234567890",
    }
    this.invalidCustomerDetails = {
        fullName: "",
        phoneNumber: "",
    }
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

  async fillValidCustomerInformation() {
    await this.fullNameInput.fill(this.validCustomerDetails.fullName);
    await this.phoneNumberInput.fill(this.validCustomerDetails.phoneNumber);
  }
  
  async fillInvalidCustomerInformation() {
    await this.fullNameInput.fill("");
    await this.phoneNumberInput.fill("");
  }

  async clickConfirmOrderButton() {
    await this.confirmOrderButton.click();
  }

  async displayThankYouMessage() {
    await expect(this.page.getByTestId("confirmed-message")).toHaveText(`ขอบคุณ ${this.validCustomerDetails.fullName}`);
  }


}
