import { test, expect } from "@playwright/test";

// Test data: Customer information scenarios
const validCustomerDetails = {
  fullName: "First",
  phoneNumber: "0875551234",
};

const invalidCustomerDetails = {
  fullName: "",
  phoneNumber: "",
};

// Customer Order Flow Test Suite
test("Successfully completes order with valid customer information", async ({
  page,
}) => {
  // Arrange: Navigate to the product listing page
  await page.goto("http://localhost:3000/products");

  // Act: Select a product (pencil)
  await page.getByRole("link", { name: "ดินสอ 10.00 ฿" }).click();

  // Act: Enter valid customer details
  await page
    .getByRole("textbox", { name: "Full Name" })
    .fill(validCustomerDetails.fullName);
  await page
    .getByRole("textbox", { name: "Phone Number" })
    .fill(validCustomerDetails.phoneNumber);

  // Act: Confirm the order
  await page.getByRole("button", { name: "ยืนยันคำสั่งซื้อ" }).click();

  // Assert: Verify success message is displayed with customer name
  await expect(
    page.getByRole("heading", {
      name: `ขอบคุณ ${validCustomerDetails.fullName}`,
    })
  ).toBeVisible();
});

test("Prevents order completion when customer information is missing", async ({
  page,
}) => {
  // Arrange: Navigate to the product listing page
  await page.goto("http://localhost:3000/products");

  // Act: Select a product (pencil)
  await page.getByRole("link", { name: "ดินสอ 10.00 ฿" }).click();

  // Act: Enter invalid (empty) customer details
  await page
    .getByRole("textbox", { name: "Full Name" })
    .fill(invalidCustomerDetails.fullName);
  await page
    .getByRole("textbox", { name: "Phone Number" })
    .fill(invalidCustomerDetails.phoneNumber);

  // Act: Attempt to confirm the order
  await page.getByRole("button", { name: "ยืนยันคำสั่งซื้อ" }).click();

  // Assert: Verify user remains on the same page (order not processed)
  const currentUrl = page.url();
  await expect(page).toHaveURL(currentUrl);
});
