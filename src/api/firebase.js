// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getDatabase, ref, child, get } from "firebase/database";

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
const database = getDatabase(app);

// login을했다면, 유효한 user의 객체를 return
export function login() {
     signInWithPopup(auth, provider).catch(console.error);
}

// signout을 했다면, 결과에 관계없이 null return
export function logout() {
    signOut(auth).catch(console.error);
}

//콜백함수를 만들어놓고, 유저라는 상태가 변경되는 이벤트가 발생할때마다
// 콜백함수 호출
export function onUserStateChange(callback) {
onAuthStateChanged(auth, async (user) => {
    // user && adminUser(user);
    // 1.사용자가 있는 경우에 (로그인한 경우)
    const updatedUser = user ? await adminUser(user) : null;

    // console.log(user);
    callback(updatedUser);
    // if (user) { 
    //   const uid = user.uid;
    // } else {
    // }
  });
}

async function adminUser(user) {
        // 2. 사용자가 어드민 권한을 가지고 있는지 확인!
    // 3. {user, isAdmin: true/false}
    return get(ref(database, 'admins')).then((snapshot) => {
        if(snapshot.exists()) {
            const admins = snapshot.val();
            // console.log(admins);
            const isAdmin = admins.includes(user.uid);
            // console.log(isAdmin);
            return {...user, isAdmin}
        } 
        return user;
    })

}