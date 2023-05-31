const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,


};

const person2 = person1;

person2.firstName="simon"

// Modify the property `firstName` of the `person2` in "Simon".

// perchè se modifico person2.firstName si modifica anche il nome di person 1 ?
// perchè dato il fatto che ho dichiarato che l' oggetto person1 ha lo stesso valore di person2 quando vado a modificare una proprietà di uno dei due quella proprietà cambierà in entrambi poichè ho dichiarato che sono uguali (const person2 = person1)

console.log(person1);
console.log(person2);
