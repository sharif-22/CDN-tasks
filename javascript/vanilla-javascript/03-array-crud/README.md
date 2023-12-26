# Arrays (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #3: Create a primitive & reference array with all the CRUD operations. (Manipulations)

in array we can store any data types i pick reference data type for example by the way it can applicable for primitive too

```js
// global variables
let membersList = [];
let index = 0;

console.log(membersList); // []

// uttlity functions
function addElementToList(fullname, mail, arr) {
  arr.push({ id: arr.length, fullname: fullname, mail: mail });
}
```

```js
// pushing or adding elements to arrary
let fullName = "sharif";
let mail = "sharif@google.com";

addElementToList(fullName, mail, membersList);

// read
console.log(membersList); // [{fullname:"sharif", mail:"sharif@google.com"}]
```

```js
//updateing array
membersList[index].fullname = "khajasharif";
membersList[index].mail = "khajasharif@gmail.com";

console.log(membersList); // [{fullname:"khajasharif", mail:"khajasharif@gmail.com"}]
```

```js
// deleting a array
membersList.splice(index, 1);
console.log(membersList); // []
```

### [Live link](https://sharif-22.github.io/cyberdude-challenges/javascript/03-array-crud)

## References:

[![IMAGE ALT TEXT](http://img.youtube.com/vi/369s20mJmho/0.jpg)](http://www.youtube.com/watch?v=369s20mJmho "#04 - ES6+ JavaScript Arrays in Tamil - (தமிழில்) | Modern JavaScript in Tamil")
[![IMAGE ALT TEXT](http://img.youtube.com/vi/pH1-NkLSOcs/0.jpg)](http://www.youtube.com/watch?v=pH1-NkLSOcs "#15 - JavaScript Arrays - (தமிழில்) (Tamil) | JavaScript Course")
