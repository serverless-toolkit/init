import { test, expect } from '@playwright/test';
import playwrightApiMatchers from 'odottaa';
expect.extend(playwrightApiMatchers);

test.describe('Workers tests', () => {
    test('worker should match JSON { "message": "Hello World!" }', async ({ request }) => {
        const response = await request.get(`https://${process.env.PROJECTNAME}.${process.env.DOMAINNAME}/workers/worker`);

        await expect(response).toHaveStatusCode(200);
        await expect(response).toMatchJSON({ message: 'Hello World!' });
    });
});