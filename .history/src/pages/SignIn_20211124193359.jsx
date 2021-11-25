import React, {useRef} from 'react';
import {signIn} from '../firebase';
import {useDispatch} from ''

const SignIn = () => {
   const emailRef = useRef();
   const passwordRef = useRef();

   async function handler(){
      try{
         await signIn(emailRef.current.value, passwordRef.current.value);
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
