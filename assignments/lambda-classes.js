// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor {
    constructor(attributes_instructor) {
        super(attributes_instructor);
        this.specialty = attributes_instructor.specialty;
        this.favLanguage = attributes_instructor.favLanguage;
        this.catchPhrase = attributes_instructor.catchPhrase;
    }
}