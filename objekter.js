"use strict";

function constructStudent(firstName, lastName) {
  const Student = {
    firstName: firstName,
    lastName: lastName,
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };
  return Student;
}

const harry = constructStudent("Harry", "Potter");
const ron = constructStudent("Ron", "Weasley");

Object.defineProperty(ron, "pet", { value: "Rat", enumerable: true, configurable: true, writable: true });

console.log(harry, ron);
