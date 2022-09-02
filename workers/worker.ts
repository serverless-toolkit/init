import { Request, Response } from "@serverless-toolkit/cli";

async function worker1(request: Request): Promise<Response> {

    return {
        message: 'Hello World!'
    };
}