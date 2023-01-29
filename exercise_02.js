//02. Write a JavaScript program to delete the email property from the following object.
// Also print the object before and after deleting the property.

const student = {
  name: "Erick",
  lastName: "Brandao",
  age: 33,
  email: "erickfb56@gmail.com",
};

const deleteProperty = (object, property) => {
  console.log(object);

  delete object[`${property}`];

  console.log(object);
};

deleteProperty(student, "email");
// deleteProperty(student, "age");
