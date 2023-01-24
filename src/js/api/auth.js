import firebase from "firebase/app";
import "firebase/auth";
import db from "../db/firestore";

const createUserProfile = (userProfile) =>
  db
    .collection("profiles")
    .doc(userProfile.uid)
    .set(userProfile);


export async function register({ email, password,username,avatar }) {
  // try {
  //   const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  //   await createUserProfile({email,password,username,avatar,uid:user.uid,joinedChats: []})
  //   return user;
  // } catch (error) {
  //   return Promise.reject(error.message);
  // }

  const userProfile = {uid: user.uid, username, email,password, avatar, joinedChats: []}
  await createUserProfile(userProfile)
  return userProfile;
}
export const logout = () => firebase.auth().signOut()

export const login = async ({email, password}) =>{
  const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
  const userProfile = await getUserProfile(user.uid);
  return userProfile;
}

export const onAuthStateChanges = onAuth =>
  firebase.auth().onAuthStateChanged(onAuth);


  export const getUserProfile = uid =>
  db
    .collection('profiles')
    .doc(uid)
    .get()
    .then(snanpshot => snanpshot.data())