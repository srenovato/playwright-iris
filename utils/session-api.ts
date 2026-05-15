import { request, expect } from '@playwright/test';

export async function createPendingSession(
  sessionCookie: string
) {

  const randomId = Math.floor(Math.random() * 100000);

  const sessionId = `TEST-QA-${randomId}`;

  const apiContext = await request.newContext({

    baseURL: 'https://iris.revelarautomation.com',

    extraHTTPHeaders: {
      'X-Case-Token':
        '9475e5cd3be34138e48ed7229b1212986217278b70867d8dcf60f581b26862c0',
    },

  });

  const response = await apiContext.post(
    '/api/admin/sessions',
    {

      headers: {
        Cookie: `iris_role_session=${sessionCookie}`,
      },

      data: {
        id: sessionId,
        subject_id: 'S-0003',
        chamber_id: 'C-04',
        apparatus_id: 'AP-009',
        scheduled_for: '2026-05-30T17:35:00.000Z',
      },

    }
  );

  console.log(await response.json());

  expect(response.status()).toBe(201);

  return {
    sessionId,
    response,
    body: await response.json(),
  };
}