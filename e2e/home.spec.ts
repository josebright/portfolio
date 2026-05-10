import { test, expect } from '@playwright/test';

test.describe('home page', () => {
  test('renders the brand and primary nav', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Bright8/);
    await expect(page.getByRole('link', { name: /^Bright8/ }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects' }).first()).toBeVisible();
  });

  test('navigates to a case-study page', async ({ page }) => {
    await page.goto('/projects');
    await page.getByRole('link', { name: /SciVenia & Mubazar/ }).click();
    await expect(page).toHaveURL(/\/projects\/scivenia-mubazar-cloud$/);
    await expect(page.getByRole('heading', { name: /SciVenia & Mubazar/ })).toBeVisible();
    await expect(page.getByText('Problem', { exact: true })).toBeVisible();
  });

  test('serves a usable resume link', async ({ page }) => {
    await page.goto('/');
    const resumeLink = page.getByRole('link', { name: /resume/i }).first();
    await expect(resumeLink).toHaveAttribute('href', /Uchenna-Bright-Ugwumadu\.pdf$/);
  });
});
