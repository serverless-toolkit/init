import { Request, Response } from '@serverless-toolkit/cli';

async function worker(request: Request): Promise<Response & { message: string }> {
	return {
		message: 'Hello World!'
	};
}
