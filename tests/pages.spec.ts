import { test, expect } from '@playwright/test';

test.describe('Page tests', () => {
    test('page index.svx should have title "Example Index Page"', async ({
        page,
    }) => {
        await page.goto(`https://${process.env.PROJECTNAME}.${process.env.DOMAINNAME}/`);

    await expect(page).toHaveTitle('Example Index Page');
  });
});