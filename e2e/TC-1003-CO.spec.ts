import { test, expect } from "@playwright/test";

const validCustomerDetails = {
    fullName: 'First',
    phoneNumber: '0875551234'
}

const invalidCustomerDetails = {
    fullName: '',
    phoneNumber: ''
}

test("Input valid customer details", async ({ page }) => {
    await page.goto("http://localhost:3000/products");

    await page.getByRole('link', { name: 'ดินสอ 10.00 ฿' }).click();

    await page.getByRole('textbox', { name: 'Full Name' }).fill(validCustomerDetails.fullName)
    await page.getByRole('textbox', { name: 'Phone Number' }).fill(validCustomerDetails.phoneNumber)

    await page.getByRole('button', { name: 'ยืนยันคำสั่งซื้อ' }).click();

    await expect(page.getByRole('heading', { name: `ขอบคุณ ${validCustomerDetails.fullName}` })).toBeVisible();
})

test("Input invalid customer details", async ({ page }) => {
    await page.goto("http://localhost:3000/products");

    await page.getByRole('link', { name: 'ดินสอ 10.00 ฿' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).fill(invalidCustomerDetails.fullName)
    await page.getByRole('textbox', { name: 'Phone Number' }).fill(invalidCustomerDetails.phoneNumber)

    await page.getByRole('button', { name: 'ยืนยันคำสั่งซื้อ' }).click();
    const currentUrl = page.url();
    await expect(page).toHaveURL(currentUrl);
})