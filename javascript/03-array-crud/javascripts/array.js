// Today's task: Create a primitive & reference array with all the CRUD operations. (Manipulations)

// create
let primitive = [undefined, 8, null, "Sharif"];
// read
// console.log(primitive); //[undefined, 8, null, 'Sharif']

// added new value
primitive[primitive.length] = true;
// console.log(primitive); //[undefined, 8, null, 'Sharif', true]

// delete the last added element
delete primitive[primitive.length - 1];
// console.log(primitive); //[undefined, 8, null, 'Sharif', empty]

// create refernece array
let vegetables = [
  { id: 1, vegetable: "Beans" },
  {
    id: 2,
    vegetable: "Onion",
  },
  { id: 3, vegetable: "Tamatto" },
];

// method 1 to add new Element
vegetables[vegetables.length] = {
  id: vegetables.length + 1,
  vegetable: "Carrot",
};
// method 2 to add new Element
vegetables.push({ id: vegetables.length + 1, vegetable: "Beatrot" });

// Read
// console.log(vegetables);
// Update
vegetables[2].vegetable = "Potatto";
// console.log(vegetables);

// Delete
delete vegetables[vegetables.length - 1];
// we delete the beatroot
// console.log(vegetables);

// again we added the beatroot
vegetables.push({ id: vegetables.length + 1, vegetable: "Beatroot" });
// console.log(vegetables);
