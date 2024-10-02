class Person {
    constructor(name, age) {
        this.name = 'Jane Doe';
        this.age = 30;
    }

    greeting() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

module.exports = Person;