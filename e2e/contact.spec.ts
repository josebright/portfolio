import { test, expect } from '@playwright/test';

test.describe('contact form', () => {
  test('submits a valid message and confirms success', async ({ page }) => {
    await page.goto('/contact');
    await page.getByLabel(/your name/i).fill('Recruiter');
    await page.getByLabel(/your email/i).fill('recruiter@example.com');
    await page
      .getByLabel(/what's on your mind/i)
      .fill('We have a role that matches your background.');
    await page.getByRole('button', { name: /send message/i }).click();
    await expect(page.getByText(/thanks/i)).toBeVisible();
  });

  test('rejects an invalid submission with a server error', async ({ page }) => {
    await page.goto('/contact');
    await page.evaluate(() => {
      const form = document.querySelector('form');
      form?.setAttribute('novalidate', 'novalidate');
    });
    await page.getByLabel(/your name/i).fill('A');
    await page.getByLabel(/your email/i).fill('not-an-email');
    await page.getByLabel(/what's on your mind/i).fill('short');
    await page.getByRole('button', { name: /send message/i }).click();
    await expect(page.getByText(/invalid form data/i)).toBeVisible();
  });
});
