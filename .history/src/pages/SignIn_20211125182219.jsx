import React, {useRef} from 'react';
import {signIn} from '../firebase';
// import {signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
// import {getAuth} from 'firebase/auth';
import {useDispatch} from 'react-redux';
import {setLogin} from '../store/slices/userSlice';

const SignIn = () => {
   const dispatch = useDispatch();
   const emailRef = useRef();
   const passwordRef = useRef();


   // function handler(){
   //    const auth = getAuth();
   //    try{
   //       signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
   //       .then(({user})=> {
   //          console.log(user);
   //          dispatch({
   //             email: emailRef,
   //             id: user.uid,
   //             token: user.accessToken,
               
   //          })
   //          // push()
   //       })
   //    }
   //    catch{
   //       alert('error in sign in')
   //    }
   // }
   async function handler(){
      try{
         await signIn(emailRef.current.value, passwordRef.current.value)
         .then(({user}) => {
            console.log(user);
            dispatch({
               email: emailRef,
               id: 
               
            })
         })

      }
      catch{
         alert('error in sign in')
      }
   }
   return (
      <div>
         SignIn
         <input ref={emailRef} placeholder='email' />
         <input ref={passwordRef} placeholder='password' />
         <button onClick={handler} >Sign in</button>
      </div>
   )
}

export default SignIn;
