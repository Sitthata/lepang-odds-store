import { expect, Page } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToProductsPage() {
    await this.page.goto("http://localhost:3000/products");
  }

  async displayProductsPageTitle() {
    await expect(this.page.getByText("All Products 1")).toBeVisible();
  }

  async displayAllProducts(productLength: number) {
    const productLinks = await this.page.getByTestId("product-name").allTextContents();
    console.log(productLinks);
    await expect(productLinks).toHaveLength(productLength);
  }
}
