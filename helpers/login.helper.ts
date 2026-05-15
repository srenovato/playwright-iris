import { Page, expect } from '@playwright/test';

type UserCredentials = {
  role: string;
  password: string;
};

export async function loginAs(
  page: Page,
  user: UserCredentials
) {

  await page.goto('/');

  await page.getByRole('link', {
    name: 'Staff login'
  }).click();

  await page.getByRole('textbox', {
    name: 'Case Token'
  }).fill(
    process.env.CASE_TOKEN!
  );

  await page.getByLabel('Role').selectOption(
    user.role
  );

  await page.getByRole('textbox', {
    name: 'Password'
  }).fill(user.password);

  await page.getByRole('button', {
    name: 'Sign in'
  }).click();

  await expect(
    page.getByRole('heading', {
      name: 'Dashboard'
    })
  ).toBeVisible({timeout: 10000});

}
