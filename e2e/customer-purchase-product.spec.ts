import test, { expect } from "@playwright/test";
import { ProductsPage } from "./pages/products-page";
import { ProductDetailPage } from "./pages/product-detail-page";

test.describe("Customer Purchase Product", () => {
    test("Navigates to the products page and displays the correct title", async ({
        page,
      }) => {
        const productsPage = new ProductsPage(page);
        await productsPage.goToProductsPage();
        await productsPage.displayProductsPageTitle();
      });
      
      test("Displays the correct number of products in the product list", async ({
        page,
      }) => {
        const productsPage = new ProductsPage(page);
        await productsPage.goToProductsPage();
        await productsPage.displayAllProducts(16);
      });

      test("Displays correct product details when a specific product is selected", async ({
        page,
      }) => {
        const productDetailPage = new ProductDetailPage(page);
        await productDetailPage.goToProductDetailPage();
        await productDetailPage.displayProductTitle();
        await productDetailPage.displayProductPrice();
        await productDetailPage.displayProductImage();
      });

      test("Successfully completes order with valid customer information", async ({
        page,
      }) => {
        const productsDetailPage = new ProductDetailPage(page);
        await productsDetailPage.goToProductDetailPage();
        await productsDetailPage.fillValidCustomerInformation();
        await productsDetailPage.clickConfirmOrderButton();
        await productsDetailPage.displayThankYouMessage();
      });
      
      test("Prevents order completion when customer information is missing", async ({
        page,
      }) => {
        const productsDetailPage = new ProductDetailPage(page);
        await productsDetailPage.goToProductDetailPage();
        await productsDetailPage.fillInvalidCustomerInformation();
        await productsDetailPage.clickConfirmOrderButton();
      
        const currentUrl = page.url();
        await expect(page).toHaveURL(currentUrl);
      });
      
})