import { test, expect } from '@playwright/test';

import { createPendingSession } from '../utils/session-api';

import { loginAs } from '../helpers/login.helper';

test('Permission - Access to Approval controls - The role Test Subject should not see Approval controls', async ({ page }) => {

    await loginAs(page, {
      role: 'Test Subject',
      password: process.env.TEST_SUBJECT_PASSWORD!,
    });
    await expect(
      page.getByRole('link', {
        name: 'Approvals'
      })
    ).toHaveCount(0);

});

test('Permission - Access to Export controls - The role Junior Coordinator should not access export controls', async ({ page }) => {
  await loginAs(page, {
      role: 'Junior Test Coordinator',
      password: process.env.JUNIOR_PASSWORD!,
    });

    await expect(
      page.getByRole('link', {
        name: /reports/i
      })
    ).toHaveCount(0);

});

test('Permission - Access to Approval controls - The role Senior Coordinator should approve a session', async ({ page }) => {
	await loginAs(page, {
  role: 'Senior Test Coordinator',
  password: process.env.SENIOR_PASSWORD!,
});
	
		const cookies = await page.context().cookies();
		const sessionCookie = cookies.find(
      cookie => cookie.name === 'iris_role_session'
    );

    const session = await createPendingSession(
      sessionCookie!.value
    );

    expect(session.response.status()).toBe(201);

    console.log(session.sessionId);

  await page.getByRole('link', { name: 'Approval'}).click();
	await page.getByRole('button', {
  name: /approve/i
  }).first().click();
	await expect(
  page.getByText(session.sessionId)
).not.toBeVisible({
  timeout: 10000
});
// Here I'd like to add a stronger validation to guarantee the session was approved, but there's no message or anything that indicates the success.
});

test('Permission - Access to Approval controls - The role Senior Coordinator should reject a session', async ({ page }) => {
	await loginAs(page, {
  role: 'Senior Test Coordinator',
  password: process.env.SENIOR_PASSWORD!,
});
	
		const cookies = await page.context().cookies();
		const sessionCookie = cookies.find(
      cookie => cookie.name === 'iris_role_session'
    );

    const session = await createPendingSession(
      sessionCookie!.value
    );

    expect(session.response.status()).toBe(201);

    console.log(session.sessionId);

  await page.getByRole('link', { name: 'Approval'}).click();
	await page.getByRole('button', {
  name: /reject/i
  }).first().click();
	await expect(
  page.getByText(session.sessionId)
).not.toBeVisible({
  timeout: 10000
});
//Here I'd like to add a stronger validation to guarantee the session was approved, but there's no message or anything that indicates the success.
});






