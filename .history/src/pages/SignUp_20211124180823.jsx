import React, {useRef} from 'react';
import {signUp} from '../firebase';

const SignUp = () => {
   const emailRef = useRef();
   const passwordRef = useRef();

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