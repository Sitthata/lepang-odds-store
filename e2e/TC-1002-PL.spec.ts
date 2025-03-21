import { test, expect } from "@playwright/test";

test("Select pencil product", async ({ page }) => {
    await page.goto("http://localhost:3000/products");

    await page.getByRole('link', { name: 'ดินสอ 10.00 ฿' }).click();

    await expect(page.getByText('ดินสอ')).toHaveText('ดินสอ');
    await expect(page.getByText('10.00 ฿')).toHaveText('10.00 ฿');
    await expect(page.getByRole('img', { name: 'ดินสอ' })).toBeVisible();
})