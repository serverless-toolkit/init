import { ISaga, Context, Request } from '@serverless-toolkit/sdk';

class Saga implements ISaga {
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
