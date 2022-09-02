import { test, expect } from "@playwright/test";

test.describe("Page tests", () => {
  test('page index.svx should have title "Example Index Page"', async ({
    page,
  }) => {
    await page.goto(`/`);

    await expect(page).toHaveTitle("Example Index Page");
  });
});
