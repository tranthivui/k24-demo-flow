import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page.getByRole("heading",{level: 1,name: "E-commerce site testing"})).toHaveText("E-commerce site testing")
});

