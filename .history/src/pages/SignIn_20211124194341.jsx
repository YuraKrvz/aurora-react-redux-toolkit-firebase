import React, {useRef} from 'react';
import {signIn} from '../firebase';
import {useDispatch} from 'react-redux';
import {setLogin} from '../store/slices/userSlice';

const SignIn = () => {
   const dispatch = useDispatch();
   const emailRef = useRef();
   const passwordRef = useRef();

   async function handler(){
      try{
         await signIn(emailRef.current.value, passwordRef.current.value);
         dispatch({
            email: 
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
