import { test, expect } from '@playwright/test';

import { loginAs } from '../helpers/login.helper';

test('Login - Login as Test Subject - Should login successfully', async ({ page }) => {
await loginAs(page, {
      role: 'Test Subject',
      password: process.env.TEST_SUBJECT_PASSWORD!,
    });
});

test('Login - Login as Junior Test Coordinator - Should login successfully', async ({ page }) => {
await loginAs(page, {
      role: 'Junior Test Coordinator',
      password: process.env.JUNIOR_PASSWORD!,
    });
});

test('Login - Login as Senior Test Coordinator - Should login successfully', async ({ page }) => {
await loginAs(page, {
      role: 'Senior Test Coordinator',
      password: process.env.SENIOR_PASSWORD!,
    });
});

test('Login - Login as Director of Enrichment - Should login successfully', async ({ page }) => {
await loginAs(page, {
      role: 'Director of Enrichment',
      password: process.env.DIRECTOR_PASSWORD!,
    });
});






