// Task Today: Create a Array of Objects and loop through it. Discuss about various looping options.

const cartoonsArr = [
  {
    id: 1,
    name: "Ben",
    strength: "Omnitrix",
    famousDialogue: "It's hero time!",
    productionHouse: "Cartoon Network Studios",
    firstEpisodeDate: "December 27, 2005",
    languagesDubbedInIndia: ["English", "Hindi", "Tamil", "Telugu"],
  },
  {
    id: 2,
    name: "Jackie",
    strength: "Martial Arts Skills",
    famousDialogue: "One more thing...",
    productionHouse: "Sony Pictures Television",
    firstEpisodeDate: "September 9, 2000",
    languagesDubbedInIndia: ["English", "Hindi"],
  },
  {
    id: 3,
    name: "Mr.Bean",
    strength: "Comedic Genius",
    famousDialogue: "Merry Christmas, Mr. Bean!",
    productionHouse: "Tiger Aspect Productions",
    firstEpisodeDate: "January 1, 1990",
    languagesDubbedInIndia: ["English", "Hindi"],
  },
  {
    id: 4,
    name: "Nobita",
    strength: "Doraemon's Gadgets",
    famousDialogue: "Doraemon, help me!",
    productionHouse: "Shin-Ei Animation",
    firstEpisodeDate: "April 1, 1979",
    languagesDubbedInIndia: ["Japanese", "Hindi", "Tamil", "Telugu"],
  },
];

let i = 0;

// // while loop
// while (i < cartoonsArr.length) {
//   let currentName = cartoonsArr[i].name;
//   console.log(currentName);
//   //   currentName = "sharif";
//   //   console.log(currentName);
//   i++;
// }

// do while
// do {
//   let currentName = cartoonsArr[i].name;
//   console.log(currentName);
//   i++;
// } while (i < cartoonsArr.length);

// //  iterates  objects
// for (key in cartoonsArr[0]) {
//   //   console.log(key);
//   console.log(char, ":", cartoonsArr[0][char]);
// }

// //  iterates in arrays
// for (char of cartoonsArr) {
//   console.log(char);
// }

// // for loop and for each both are same
// for (let index = 0; index < cartoonsArr.length; index++) {
//   let hero = cartoonsArr[index];
//   //   return hero;
//   //   console.log("%cSay my name !", "color:red");
//   //   console.log(`${(hero.name = "sharif")} You Dam Right `);
//   //   console.log(`${hero.name} You Dam Right `);
// }
// console.log(`original :`, cartoonsArr);

const foreachLoop = cartoonsArr.forEach((hero) => {
  let charName = `https://github.com/${hero.name}/cyberdude-challenges`;
  //   console.log(charName);
  return charName;
});
// console.log("forEach function :", foreachLoop); // undefine

const mapedArr = cartoonsArr.map((hero) => {
  let charName = `https://github.com/${hero.name}/cyberdude-challenges`;
  return charName;
});
// console.log("map function :", mapedArr);

// console.log(`original :`, cartoonsArr);

// map function without using map method
let forMapArr = [];
for (let index = 0; index < cartoonsArr.length; index++) {
  let hero = cartoonsArr[index];
  let charName = `https://github.com/${hero.name}/cyberdude-challenges`;
  forMapArr.push(charName);
}
console.log(forMapArr);
