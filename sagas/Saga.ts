import { Saga, Context, Request } from '@serverless-toolkit/cli';

class Saga1 implements Saga {
	id: string = '';
	value: number = 0;
	context: Context;
	request: Request;

	increment() {
		this.value += 1;
	}

	decrement() {
		this.value -= 1;
	}

	onAlarm() {
	}
}
