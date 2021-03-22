let person = {
    name: 'Dobrin',
    fn: 111
}
// 3 ways to define a property
person.dob = new Date()
const lastNamePropValue = 'lastName';
person[lastNamePropValue] = 'Donev'

Object.defineProperty(person, 'middleName', {
    value: 'Dobrinov',
    enumerable: false,
    writable: true,
})

Object.getOwnPropertyDescriptor(person, 'middleName')

// console.log(Object.getOwnPropertyDescriptor(person, 'middleName'))


// console.log(Object.getOwnPropertyNames(person))

//Object.freeze(person);
// person.name = 'Ivan'
// person.grade = 2;

// check for previously freezed
Object.isFrozen(person)

Object.seal(person);
person.name = 'Ivan'
person.grade = 2;

console.log(person)


const arr = ['Bulgaria', 'Moldova', 'Greece']

// for (const key in arr) {
//     console.log(key)
// }

for (const iterator of arr) {
    console.log(iterator)
}

const obj = {
    a: 1,
    c: 2,
    b: 3,
}

// HOMEWORK:
// Implement JS objects with keys in alphabetical order