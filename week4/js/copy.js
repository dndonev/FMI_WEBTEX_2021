const log = console.log;
const person = {
    name: 'Dobrin',
    dob: new Date(),
    und: undefined,
    inf: Infinity,
    address: {
        street: 'Vitosha',
        no: '1'
    }
}

// deep copy
const stringified = JSON.stringify(person);
const person2 = JSON.parse(stringified);

person2.address.street = 'Rakovski'
person2.dob = new Date(person2.dob)

log(person2)

const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();

const obj = { a: 1 };
const obj2 = { a: 2, b: 2 };
const obj4 = { c: 5 };

// shallow copy
const obj3 = Object.assign(obj, obj2, obj4)
log(obj3)