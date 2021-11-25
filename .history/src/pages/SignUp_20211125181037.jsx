import React, {useRef} from 'react';
import {signUp} from '../firebase';
// import {createUserWithEmailAndPassword} from 'firebase/auth';
// import {getAuth} from 'firebase/auth';


const SignUp = () => {
   const emailRef = useRef();
   const passwordRef = useRef();

   // function handler(){
   //    const auth = getAuth();

   //       createUserWithEmailAndPassword(auth, emailRef, passwordRef)
   //       .then(({user})=>{
   //          console.log(user);

   //       }).catch(console.error)

   // }
   async function handler(){
      try{
         await signUp(emailRef.current.value, passwordRef.current.value)
      }
      catch{
         alert('error in sign up')
      }
   }

   return (
      <div>
         <input  ref={emailRef} placeholder='email' />
         <input  ref={passwordRef} placeholder='password' />
         <button onClick={handler}>click</button>
      </div>
   )
}

export default SignUp;