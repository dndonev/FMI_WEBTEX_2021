function Animal(age) {
    this.age = age;
}

console.log('Animal prototype: ', Animal.prototype)

Animal.prototype.speak = function () {
    console.log(`I'm ${this.name} and I'm ${this.age} years old`)
}

Cat.prototype = Object.create(Animal.prototype)

function Cat(name, age) {
    Animal.call(this, age)
    this.name = name;
}

console.log('Cat prototype: ', Cat.prototype)

Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog;

function Dog(name, age) {
    Animal.call(this, age)
    this.name = name;
}

console.log('Dog prototype: ', Dog.prototype)


const cat1 = new Cat('Rory', 5);
cat1.speak();
const dog1 = new Dog('Barry', 2)
dog1.speak();
console.log('dog1 instance of Animal: ', dog1 instanceof Animal)