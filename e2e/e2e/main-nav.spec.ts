import {test, expect, chromium} from '@playwright/test';

test('the main nav tabs should display correctly', async ({page}) => {
    await page.goto('http://localhost:3000/');
    await expect(page).toHaveTitle('Mentoring tech test');
});