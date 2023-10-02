"use strict";

const harry = {
  firstName: "Harry",
  lastName: "Potter"
};

const ron = {
  firstName: "Ron",
  lastName: "Weasley"
};

Object.defineProperty(ron, "House", { value: "Gryffindor", enumerable: true, configurable: true, writeable: true });

console.log(harry, ron);
