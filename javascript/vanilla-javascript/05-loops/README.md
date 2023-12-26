# Loops (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #5: Create a Array of Objects and loop through it. Discuss about various looping options.

> - While loop
> - do while loop
> - for loop
> - foreach - > used to itterate array
> - for in - > used to itterate obj keys
> - for of - > used to itterate array
> - map - > used to itterate array and return array

```js
// simple cartoons Array of object

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
```

```js
let i = 0;
// while loop
while (i < cartoonsArr.length) {
  let currentName = cartoonsArr[i].name;
  console.log(`im ${currentName}`);
  //   [0] - Ben , [1] - Jackie , [2]-  Mr.Bean , [3] Nobita
  i++;
}
```

```js
// do while
do {
  let currentName = cartoonsArr[i].name;
  console.log(`im ${currentName}`);
  //   [0] - Ben , [1] - Jackie , [2]-  Mr.Bean , [3] Nobita
  i++;
} while (i < cartoonsArr.length);
```

```js
// for loop and for each both are same
for (let index = 0; index < cartoonsArr.length; index++) {
  let hero = cartoonsArr[index];
  console.log(`${hero.name} You Dam Right `);
}
```

```js
cartoonsArr.forEach((hero) => {
  console.log(`${hero.name} You Dam Right `);
  //[0] - Ben You Dam Right, [1] - Jackie You Dam Right, [2]-  Mr.Bean You Dam Right, [3] Nobita You Dam Right
});
```

```js
const mapedArr = cartoonsArr.map((hero) => {
  let gitUrl = `https://github.com/${hero.name}/cyberdude-challenges`;
  return gitUrl;
});

// if we manipulate in map method it doesnt effect the original arr and this return new arr

console.log("map function :", mapedArr);

console.log(`original :`, cartoonsArr);
```
