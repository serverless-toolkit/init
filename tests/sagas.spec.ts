import { test, expect } from "@playwright/test";
import playwrightApiMatchers from "odottaa";
expect.extend(playwrightApiMatchers);

test.describe("Sagas tests", () => {
  test('saga with id="test1" should match JSON { "id": "test1" }', async ({
    request,
  }) => {
    const response = await request.get(`/sagas/Saga?id=test1`);
    
    await expect(response).toHaveStatusCode(200);
    await expect(response).toMatchJSON({ id: "test1" });
  });
});
