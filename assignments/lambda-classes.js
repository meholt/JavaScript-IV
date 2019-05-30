// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello, my name is ${this.name}. I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attributes_instructor) {
        super(attributes_instructor);
        this.specialty = attributes_instructor.specialty;
        this.favLanguage = attributes_instructor.favLanguage;
        this.catchPhrase = attributes_instructor.catchPhrase;
    }
    demo(subject) {
        console.log(`Today, we are learning ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(attributes_student) {
        super(attributes_student);
        this.previousBackground = attributes_student.previousBackground;
        this.className = attributes_student.className;
        this.favSubjects = attributes_student.favSubjects;
    }
    listSubjects() {
        for(let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(student, subject) {
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(student,subject) {
        console.log(`${student.name} has began sprint challenge on ${subject}.`);
    }
}

class ProjectManagers extends Instructor {
    constructor(attributes_PM) {
        super(attributes_PM);
        this.gradClassName = attributes_PM.gradClassName;
        this.favInstructor = attributes_PM.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

const jan = new Person({
    name: "Jan",
    location: "CA, USA",
    age: 19,
});

const thomas = new Person({
    name: "Thomas",
    location: "HI, USA",
    age: 30,
});

const megan = new Student({
    name: "Megan",
    location: "HI, USA",
    age: 28,
    previousBackground: "#CodeNewbie",
    className: "WEBPT7",
    favSubjects: ["HTML", "CSS", "JavaScript"]
});

const hailey = new Student({
    name: "Hailey",
    location: "USA",
    age: 25,
    previousBackground: "Intermediate Coder",
    className: "WEBPT7",
    favSubjects: ["CSS", "JavaScript", "C++"]
});

const mel = new Instructor({
    name: "Mel",
    location: "AK, USA",
    age: 28,
    specialty: "Responsive Web Design",
    favLanguage: "JavaScript",
    catchPhrase: "Can't stop, won't stop."
});

const james = new Instructor({
    name: "James",
    location: "FL, USA",
    age: 35,
    specialty: "redux",
    favLanguage: "JavaScript",
    catchPhrase: "Don't stop believing!"
});

const chloe = new ProjectManagers({
    name: "Chloe",
    location: "WA, USA",
    age: 24,
    specialty: "react",
    favLanguage: "Python",
    catchPhrase: "I'm hungry...",
    gradClassName: "WEB7",
    favInstructor: "Josh"
});

const adam = new ProjectManagers({
    name: "Adam",
    location: "OR, USA",
    age: 21,
    specialty: "Digital media designs",
    favLanguage: "Python",
    catchPhrase: "It isn't over until it's over",
    gradClassName: "WEB20",
    favInstructor: "Dan"
});

console.log(jan.location);
console.log(thomas.speak());
console.log(mel.location);
console.log(mel.grade(megan, "JavaScript"));
console.log(james.catchPhrase);
console.log(james.demo("Responsive Web Design"));
console.log(james.favLanguage);
console.log(megan.previousBackground);
console.log(megan.location);
console.log(hailey.favSubjects);
console.log(megan.listSubjects());
console.log(hailey.sprintChallenge(hailey, "CSS"));
console.log(megan.PRAssignment(megan, "React"));
console.log(chloe.gradClassName);
console.log(chloe.age);
console.log(chloe.standUp("#WebPT7_Sprint03"));
console.log(adam.speak());
console.log(adam.debugsCode(hailey, "JavaScript"));
console.log(adam.favInstructor);