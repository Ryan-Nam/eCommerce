// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// login을했다면, 유효한 user의 객체를 return
export async function login() {
    return signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user);
    return user;

  }).catch(console.error);
}

// signout을 했다면, 결과에 관계없이 null return
export async function logout() {
    return signOut(auth).then(()=> null)
}

//콜백함수를 만들어놓고, 유저라는 상태가 변경되는 이벤트가 발생할때마다
// 콜백함수 호출
export function onUserStateChange(callback) {
onAuthStateChanged(auth, (user) => {
    callback(user);
    // if (user) { 
    //   const uid = user.uid;
    // } else {
    // }
  });
}