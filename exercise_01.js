// 01. Write a JavaScript program to list the properties of a JavaScript object.

const student = {
  name: "Erick",
  lastName: "Brandao",
  age: 33,
  email: "erickfb56@gmail.com",
};

const listProperties = (object) => Object.keys(object);

console.log(listProperties(student));
