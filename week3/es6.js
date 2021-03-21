class Animal {
    constructor(age) {
        this.age = age;
    }

    speak() {
        console.log(`I'm ${this.name} and I'm ${this.age} years old`);
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(age);
        this.name = name;
    }
}

const dog = new Dog('Barry', 15);
dog.speak();