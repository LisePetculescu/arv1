"use strict";

function Student(firstname, lastname) {
  this.firstName = firstname;
  this.lastName = lastname;
  Object.defineProperty(this, "fullName", {
    get: function () {
      return this.firstName + " " + this.lastName;
    }
  });
  this.toString = function () {
    return this.fullName;
  };
}

const harry = new Student("Harry", "Potter");
const ron = new Student("Ron", "Weasley");
Object.defineProperty(ron, "pet", { value: "Rat", enumerable: true, configurable: true, writable: true });

console.log(harry);
console.log("Something about " + harry.toString());
console.log("lfmdlsm " + harry.fullName);
console.log("hihi " + harry);
