import {test, expect, chromium} from '@playwright/test';

test('has title', async ({page}) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle('Mentoring tech test');
});