// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,sendPasswordResetEmail } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-l4uSAqCKu-IYpRqX3psDwo3Dn68XzaI",
  authDomain: "ethos-website-98c85.firebaseapp.com",
  projectId: "ethos-website-98c85",
  storageBucket: "ethos-website-98c85.appspot.com",
  messagingSenderId: "458849843741",
  appId: "1:458849843741:web:84805fb05fe2dded6ea4f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)
}

export const signOut = () => {
    auth.signOut().then(() => {
        console.log("Signed Out")
    }).catch((error) => {
        alert(error.message)
    })
}

export const signUp = (email,password,username) => {
    console.log(username+"hello")
    createUserWithEmailAndPassword(auth,email,password).then(()=>{
    updateProfile(auth.currentUser,{
        displayName:username
    }).then(()=>{
        console.log(auth.currentUser)
        console.log("Profile Updated")
    })   
    }).catch((error)=>{
        return error.message
    })
    console.log(auth.currentUser)
}

export const signIn = async (email,password) => {
    await signInWithEmailAndPassword(auth,email,password).then((result)=>{
        console.log(result.user)
    }).catch((error)=>{
        return error.message
    })
}

export const resetPassword = (email) => {
    sendPasswordResetEmail(auth,email).then(()=>{
        alert("Password Reset Link Sent to your Email")
    }).catch((error)=>{
        alert(error.message)
    })
}