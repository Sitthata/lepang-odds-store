import { test, expect } from "@playwright/test";

test("Go to Products page", async ({ page }) => {
  await page.goto("http://localhost:3000/products");

  await expect(page.getByText("All Products 1")).toBeVisible();
});

test("List 16 products", async ({ page }) => {
  await page.goto("http://localhost:3000/products");
  const products = [
    {
      name: "กระป๋องเก็บความเย็น",
      description: "This is description for product 1",
      price: 200.0,
    },
    {
      name: "เสื้อโปโล",
      description: "This is description for product 2",
      price: 300.0,
    },
    {
      name: "เสื้อเชิ้ต",
      description: "This is description for product 3",
      price: 200.0,
    },
    {
      name: "แก้วน้ำ",
      description: "This is description for product 4",
      price: 300.0,
    },
    {
      name: "กระเป๋าออกกำลังกาย",
      description: "This is description for product 5",
      price: 1000.0,
    },
    {
      name: "หมวก",
      description: "This is description for product 6",
      price: 150.0,
    },
    {
      name: "เสื้อวิ่ง",
      description: "This is description for product 7",
      price: 250.0,
    },
    {
      name: "พวงกุญแจ",
      description: "This is description for product 8",
      price: 50.0,
    },
    {
      name: "ถุงผ้า",
      description: "This is description for product 9",
      price: 300.0,
    },
    {
      name: "ถุงเท้า",
      description: "This is description for product 10",
      price: 100.0,
    },
    {
      name: "ยาดม",
      description: "This is description for product 11",
      price: 40.0,
    },
    {
      name: "สมุด",
      description: "This is description for product 12",
      price: 20.0,
    },
    {
      name: "ปากกา",
      description: "This is description for product 13",
      price: 10.0,
    },
    {
      name: "ดินสอ",
      description: "This is description for product 14",
      price: 10.0,
    },
    {
      name: "ผ้าบัฟ",
      description: "This is description for product 15",
      price: 200.0,
    },
    {
      name: "ขวดน้ำออกกำลังกาย",
      description: "This is description for product 16",
      price: 300.0,
    },
  ]

  const expectedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name, "th-TH"));

  const productLinks = await page.getByRole("link").all();

  await expect(productLinks).toHaveLength(expectedProducts.length);
});
