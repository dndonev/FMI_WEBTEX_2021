const log = console.log;
const num = 5;
let newNumber = num;

function changeNumber(num) {
    num = 6;
}

changeNumber(newNumber);

log(num);

const person = {
    name: 'Dobrin',
    fn: 111111
}

function changePerson(person) {
    person.name = 'ivan'
}

changePerson(person)
log(person.name)
