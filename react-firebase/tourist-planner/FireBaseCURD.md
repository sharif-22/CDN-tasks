```js
import {
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import db from "../firebase";
```

```js
//get overall data
const getFirebaseDatas = async () => {
  const querySnapshot = await getDocs(collection(db, "CollectionName"));
  const data = querySnapshot.docs.map((doc) => {
    const getData = doc.data();
    const getId = doc.id;
    const finalData = { ...getData, id: getId };
    return finalData;
  });
  console.log(data);
  if (querySnapshot.docs.length === 0) {
    console.log("norecord exist");
  }
};
getFirebaseDatas();
```

```js
//set doc with custom id

const setFirebaseDocWithId = async () => {
  const docRef = collection(db, "CollectionName");
  await setDoc(doc(docRef, "CustomID"), {
    // your needed properities
    name: "kodiyakkarai",
    district: "nagappatinam",
  });
  console.log("Document written with ID: ", docRef.id);
};
setFirebaseDocWithId();
```

```js
//set doc with random id

const addFireStoreDoc = async () => {
  await addDoc(collection(db, "CollectionName"), {
    // your needed properities
    name:"valankanni"
     district: "nagappatinam",
  });
};

addFireStoreDoc()
```

```js
// update Doc
const updateDocData = async () => {
  const docRef = doc(db, "CollectionName", "docId");

  await updateDoc(docRef, {
    // your needed properities
    district: "vedaranyam",
  });
};
updateDocData();
```

```js
//delete doc
const deleteData = async () => {
  await deleteDoc(doc(db, "CollectionName", "docId"));
};
deleteData();
```
