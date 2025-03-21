import { test, expect } from "@playwright/test";

// Product Detail View Test Suite

test("Displays correct product details when a specific product is selected", async ({
  page,
}) => {
  // Arrange: Navigate to the product listing page
  await page.goto("http://localhost:3000/products");

  // Act: Select the pencil product
  await page.getByRole("link", { name: "ดินสอ 10.00 ฿" }).click();

  // Assert: Verify product details are displayed correctly
  await expect(page.getByText("ดินสอ")).toHaveText("ดินสอ");
  await expect(page.getByText("10.00 ฿")).toHaveText("10.00 ฿");
  await expect(page.getByRole("img", { name: "ดินสอ" })).toBeVisible();
});
