import db from "../db/firestore";

// export const fetchChats = () => {
//   return db
//     .collection("chats")
//     .get()
//     .then((snapshot) => {
//       // debugger
//       snapshot.docs.map((doc) => {
//         // console.log(doc.data());
//         ({ id: doc.id, ...doc.data() });
//         // console.log( ({ id: doc.id, ...doc.data() }))
//       });

//       // ({ id: doc.id, ...doc.data() }));
//     });
// };

export const fetchChats = () =>
  db
    .collection('chats')
    .get()
    .then(snapshot =>
      snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
  )

// var docRef = db.collection("chats").doc("GA3vtJwnDhDJzstHvO3s");

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });
