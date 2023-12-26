# Objects (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #2: Create a object about ur self with all datatype values. And try to manipulate it.

Created a user profile object

```js
// user profile object
const profile = {
  // objects property
  name: "Khaja Sharif",
  bornIn: 2002,
  isDeveloper: true,
  skills: ["CSS", "PHP", "Javascript", "React", "Node"],
  // object method to get age
  dob() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.bornIn;
    return age;
  },
};
```

```js
// -- Read

// acessing profile object property
console.log(profile); // {}

// acessing profile object methods
console.log(profile.dob()); //21
```

```js
// we merge two obj with two methods using assign and spread operator

// -- Add new property
Object.assign(profile, { workAt: "CyberdudeNetworks" });

//Update skills [arr] to {obj}
profile.skills = [
  {
    itSkills: [...profile.skills],
    languages: ["English", "Tamil", "Telugu", "Urdu"],
  },
];
```

```js
delete profile.skills[0].languages;
```

### [Live link](https://sharif-22.github.io/cyberdude-challenges/javascript/02-objects-crud)

## References:

[![IMAGE ALT TEXT](http://img.youtube.com/vi/y_dx6GO3gjY/0.jpg)](http://www.youtube.com/watch?v=y_dx6GO3gjY "#14 - JavaScript Objects - (தமிழில்) (Tamil) | JavaScript Course")
[![IMAGE ALT TEXT](http://img.youtube.com/vi/-IWA5e9CNis/0.jpg)](http://www.youtube.com/watch?v=-IWA5e9CNis "#02 - ES6+ JavaScript Objects (Properties & Methods) - (தமிழில்) | Modern JavaScript in Tamil")
