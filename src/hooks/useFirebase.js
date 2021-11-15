import {
  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('')
    const auth = getAuth();

    // Google Sign in 
    const signInUsingGoogle = () =>{
      // window.location()
       setIsLoading(true);
       return signInWithPopup(auth, googleProvider);
        
    };

    // User Ovserved
    useEffect(()=>{
      const unsubscribed=  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
            setIsLoading(false)
          });
          return ()=> unsubscribed;
    },[]);


     // Email created
     const signInUsingEmailPassword = (email, password) =>{

      return createUserWithEmailAndPassword(auth, email, password);
     }
 
   
     const loginWithEmailAndPassword = (email,password) =>{
      return signInWithEmailAndPassword(auth,email,password)
       
     }

    // Email created
  //   const signInUsingEmailPassword = (auth,email, password) =>{
  //     createUserWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //      setUser(result.user)

  //      verifyEmail()
  //       console.log(result.user);
  // }).catch((error)=> {
  //   setError(error.message)
  // })
  //   }

    // Email Log in
  //   const processlogin = (email, password) =>{
  //     signInWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       setUser(user)

  // }).catch((error) => {
  //   setError(error.message)
  // });
    // }

    // Email verification
    // const verifyEmail = () =>{
    //   sendEmailVerification(auth.currentUser)
    //   .then((result) => {
    //     setUser(result)
    //   });
    // }
    
    // Log Out
    const logOut = () =>{
      setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
          }).finally(()=> setIsLoading(false))
    }
    return {
        signInUsingGoogle,
        logOut,
        user,
        setUser,
        signInUsingEmailPassword,
        loginWithEmailAndPassword,
        isLoading,setIsLoading,
      
    }
};

export default useFirebase;