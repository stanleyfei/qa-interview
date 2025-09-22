import { test, expect } from '@playwright/test';
test('Successful login', async ({ page }) => {  await page.goto('https://qainterview.netlify.app/');
await page.fill('#username', 'testuser1');       
await page.fill('#password', 'Password123@');    
await page.click(‘#loginBtn’);
await expect(page).toHaveURL(/.*dashboard/);
await expect(page.locator('h1')).toContainText(‘Stock Market Dashboard’);
