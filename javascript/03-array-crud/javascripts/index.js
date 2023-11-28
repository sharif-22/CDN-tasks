// dom elements
const viewListEl = document.querySelectorAll(".view-list");
const addMemberEl = document.querySelectorAll(".add-member");
//home dom elements
const homeEl = document.querySelector(".home");
// inputs ui dom el
const formEl = document.querySelector(".input-el");
const fullNameEl = document.querySelector("#fullname");
const mailEl = document.querySelector("#mail");
const saveMemberBtnEl = document.querySelector("#addMember");
// list ui dom el
const membersListEL = document.querySelector(".members-list");
const membersListTableEL = document.querySelector(".members-list table tbody");

// update list form ui dom el
const updateFormEl = document.querySelector(".update-input-el");
const updateFullNameEl = document.querySelector("#update-fullname");
const updateMailEl = document.querySelector("#update-mail");
const updatedMemberEl = document.querySelector("#add-updated-Member");

// global variables
let membersList = [];
let index;

//pushing members to list
saveMemberBtnEl.addEventListener("click", (e) => {
  e.preventDefault();

  let fullName = fullNameEl.value;
  let mail = mailEl.value;

  if (fullName.length >= 3) {
    addElementToList(fullName, mail, membersList);

    document.querySelector(".fullname small").textContent = "";
    viewListEl[1].classList.remove("d-none");
    fullNameEl.value = "";
    mailEl.value = "";
  } else {
    document.querySelector(".fullname small").textContent = `Enter valid name `;
  }
  // console.log(membersList);

  // update the list
  membersListTableEL.innerHTML = "";
  membersList.forEach((member) => {
    membersListTableEL.innerHTML += `
    <tr id="${member.id}" onclick="click()" >
      <td>${member.id + 1}</td> 
      <td>${member.fullname}</td> 
      <td>${member.mail}</td>  
      <td>
        <div>
          <button class="member-update">Update</button>
          <button class="member-delete">Delete</button>
        </div>
      </td>
    </tr> `;
  });
});

// printing the members based on user input like update || delete
membersListTableEL.addEventListener(
  "click",
  (e) => {
    let target = e.target;
    if (target.className === "member-update") {
      let parentEl = target.parentElement.parentElement.parentElement;

      let currentObj = membersList[parseInt(parentEl.id)];
      console.log(currentObj);

      index = currentObj.id;

      updateFullNameEl.value = `${currentObj.fullname}`;
      updateMailEl.value = `${currentObj.mail}`;

      membersList[index].fullname = updateFullNameEl.value;
      membersList[index].mail = updateMailEl.value;

      console.log(currentObj);
      // ui swaping list -> form
      updateFormEl.classList.remove("d-none");
      formEl.classList.add("d-none");
      homeEl.classList.add("d-none");
      membersListEL.classList.add("d-none");
    }

    // deleting a array
    else if (target.className === "member-delete") {
      let parentEl = target.parentElement.parentElement.parentElement;

      let currentObj = membersList[parseInt(parentEl.id)];
      // console.log(currentObj);

      index = parseInt(currentObj.id);

      membersList.splice(index, 1);

      // console.log(newList);
      //   // update the list
      // working
      membersListTableEL.innerHTML = "";
      membersList.forEach((member, index) => {
        membersListTableEL.innerHTML += `
       <tr id="${(member.id = index)}" onclick="click()" >
         <td>${member.id + 1}</td>
         <td>${member.fullname}</td>
         <td>${member.mail}</td>
         <td>
           <div>
             <button class="member-update">Update</button>
             <button class="member-delete">Delete</button>
           </div>
         </td>
       </tr> `;
      });
    }
    e.stopPropagation();
  },
  false
);

// update function for clicking the update btn
updatedMemberEl.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(index);

  membersList[index].fullname = updateFullNameEl.value;
  membersList[index].mail = updateMailEl.value;

  // update the list
  membersListTableEL.innerHTML = "";
  membersList.forEach((member) => {
    membersListTableEL.innerHTML += `
     <tr id="${member.id}" onclick="click()" >
       <td>${member.id + 1}</td> 
       <td>${member.fullname}</td> 
       <td>${member.mail}</td>  
       <td>
         <div>
           <button class="member-update">Update</button>
           <button class="member-delete">Delete</button>
         </div>
       </td>
     </tr> `;
  });

  // swaping the ui update to list
  updateFormEl.classList.add("d-none");
  formEl.classList.add("d-none");
  homeEl.classList.add("d-none");
  membersListEL.classList.remove("d-none");
});

// swaping the home && list ui -> form ui
addMemberEl.forEach((element) => {
  element.addEventListener("click", () => {
    formEl.classList.remove("d-none");
    homeEl.classList.add("d-none");
    membersListEL.classList.add("d-none");
    updateFormEl.classList.add("d-none");
  });
});

// swaping the form ui -> list view
viewListEl.forEach((element) => {
  element.addEventListener("click", () => {
    membersListEL.classList.remove("d-none");
    homeEl.classList.add("d-none");
    formEl.classList.add("d-none");
    updateFormEl.classList.add("d-none");
  });
});

// uttlity functions
function addElementToList(fullname, mail, arr) {
  arr.push({ id: arr.length, fullname: fullname, mail: mail });
}

// swaping ui home -> creat-list-form
// swaping ui home -> list
// swaping ui creat-list-form -> list
// swaping ui list -> update-form
