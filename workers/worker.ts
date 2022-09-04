import { Request, Response } from "@serverless-toolkit/sdk";

async function worker(
  request: Request
): Promise<Response & { message: string }> {
  return {
    message: "Hello World!",
  };
}
