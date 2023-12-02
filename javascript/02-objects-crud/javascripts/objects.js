// Today's task: Create a object about ur self with all datatype values. And try to manipulate it.

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

// (Add, Read, Update, Delete)

// -- Read

// acessing profile object property
console.log(profile);

// acessing profile object methods
console.log(profile.dob()); //21

// -- Add new property
Object.assign(profile, { workAt: "CyberdudeNetworks" });
console.log(profile);
console.log(`After Adding a property workAt`, profile);

//Update
console.log("Before Update", profile.skills);
profile.skills = [
  {
    itSkills: [...profile.skills],
    languages: ["English", "Tamil", "Telugu", "Urdu"],
  },
];
console.log("After Update", profile.skills[0]);

// -- Delete
console.log("Before Delete", profile.skills[0]);
// delete profile.skills[0].languages;
console.log("After Delete", profile.skills[0]);
