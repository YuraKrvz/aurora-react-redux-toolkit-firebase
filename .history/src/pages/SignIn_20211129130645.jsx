import React, {useRef, useEffect} from 'react';
import s from '../components/MainSection/MainSection.module.css';
import {signIn} from '../firebase';
import {useDispatch} from 'react-redux';
import {setLogin} from '../store/slices/userSlice';

const SignIn = () => {
   const dispatch = useDispatch();
   const emailRef = useRef();
   const passwordRef = useRef();

   async function handler(){
      try{
         await signIn(emailRef.current.value, passwordRef.current.value)
         .then(({user}) => {
            console.log(user);
            dispatch(setLogin({
               email: user.email,
               id: user.uid,
               token: user.accessToken, 
            }))
         })
      }
      catch(e){
         console.error(e)
      }
   }


   return (
      <div>
         SignIn
         <input ref={emailRef} placeholder='email' />
         <input ref={passwordRef} placeholder='password' />
         <button onClick={handler} >Sign in</button>

         <label className={s.section_register_field}>
         <label className={s.input_wrap}>
            <input className={s.section_register_input} type="email" placeholder='Your email address' />
            <input className={s.section_register_input} type="password" placeholder='Your password' />
            <button className={s.section_register_btn} >register</button>
         </label>
         </label>
      </div>
   )
}

export default SignIn;
