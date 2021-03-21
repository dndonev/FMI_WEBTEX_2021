const name = 'Dobrin'

function Person(name) {
    this.name = name;
}


const person1 = new Person();
console.log(person1.__proto__)
console.log(Person.prototype)
console.log(Person.prototype === person1.__proto__)