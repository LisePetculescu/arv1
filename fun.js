"use strict";

function Student(firstname, lastname, height) {
  this.firstName = firstname;
  this.lastName = lastname;
  this.height = height;
  Object.defineProperty(this, "fullName", {
    get: function () {
      return this.firstName + " " + this.lastName;
    }
  });
  this.toString = function () {
    return this.fullName;
  };
  this.valueOf = function () {
    return this.height;
  };
}

const harry = new Student("Harry", "Potter", 170);
const ron = new Student("Ron", "Weasley", 173);
const hermione = new Student("Hermione", "Granger", 176);
Object.defineProperty(ron, "pet", { value: "Rat", enumerable: true, configurable: true, writable: true });

console.log(harry);
console.log("Something about " + harry.toString());
console.log("lfmdlsm " + harry.fullName);
console.log("hihi " + harry);

const students = [harry, ron, hermione];

// console.log(students);

students.sort();
// students.sort().reverse();

console.log(students);

console.log("Harry er: " + harry);
// output = Harry er: 170

console.log(`Harry er: ${harry}`);
//  output = Harry er: Harry Potter
