import React, {useRef} from 'react';
import s from '../components/MainSection/MainSection.module.css';
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
      <>
         <div style={{height: '40vh'}} className={s.section_register_field} >
            <div style={{display: 'flex', flexDirection: 'column'}}>
               <label className={s.input_wrap}>
               <input className={s.section_register_input} ref={emailRef} type="email" placeholder='Your email address' />
               <input className={s.section_register_input} ref={passwordRef} type="password" placeholder='Your password' />
               <button className={s.section_register_btn} onClick={handler} >Sign Up</button>
               </label>
            </div>
         </div>
      </>
   )
}

export default SignUp;