// typescript new primitives

// unknown

function doSomething(): unknown {
	return 5;
}

let myUnknownVariable = doSomething();
myUnknownVariable.age = 50; // error: Property 'age' does not exist on type 'unknown'

//

// void
interface Ticket {
	ticketId: number;
	ticketName: string;
}


function print(): void {
	// return returnNumber();
	console.log('my void')
}

function returnNumber(): 5 {

	return 5;
}

// true/false 1
function getAvaiableTickets(): [
	{
		ticketId: 1,
		ticketName: 'ticketName'
	}
] {
	return [
		{
			ticketId: 1,
			ticketName: 'ticketName'
		}
	]
}


// never
//
interface UserContainer<never> {
	users: never;
	userCount: number;
}

fetch('my-api.url/api/files/meta').then((filesResponse => {
	const files = (filesResponse.body as any) as unknown;
}))

class Person {

	private fn: number;

	constructor(public age: number, public name: string) { }

	print(): void {
		console.log(this.age);
	}
}

const person = new Person(15, 'Dobrin');

// Enums
// js object
export enum Roles {
	Admin = 0,
	Moderator,
	AuthorizedUser,
	AnonymousUser,
	JustASimpleUser
}
type MyEnumInBrackets = 'Admin' | 'Moderator'

// tuple

const myTuple: [string, number] = ['a', 5];

// obj descructuring
const [a, b] = [[5], [1]]

