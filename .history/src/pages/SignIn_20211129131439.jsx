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
      <>
         <div className={s.section_register_field}>
            <label className={s.input_wrap}>
               <input className={s.section_register_input} ref={emailRef} type="email" placeholder='Your email address' />
               <input className={s.section_register_input} ref={passwordRef} type="password" placeholder='Your password' />
               <button className={s.section_register_btn} onClick={handler} >Sign In</button>
            </label>
         </div>
      </>
   )
}

export default SignIn;
