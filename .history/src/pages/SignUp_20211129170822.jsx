import React, {useRef, useState} from 'react';
import s from '../components/MainSection/MainSection.module.css';
import {signUp} from '../firebase';

const SignUp = () => {
   const [error, setError] = useState(false);
   let emailRef = useRef();
   let passwordRef = useRef();
   async function handler(){
      try{
         await signUp(emailRef.current.value, passwordRef.current.value);
         emailRef = emailRef.current.value = '';
         passwordRef = passwordRef.current.value = '';
         setError(false);
      }
      catch(e){
         setError(true);
         console.error(e)
      }
   }

   return (
      <>
         <div style={{height: '40vh', width: '800px'}} className={s.section_register_field} >
            <div>
               <label className={s.input_wrap}>
                  <input className={s.section_register_input} ref={emailRef} type="email" placeholder='Your email address' />
                  <input className={s.section_register_input} ref={passwordRef} type="password" placeholder='Your password' />
                  <button className={s.section_register_btn} onClick={handler} >Sign Up</button>
               </label>
               {error && <h1
                  style={{fontSize: '12px', color: 'red', textAlign: 'center'}}
                  >Error</h1>}
            </div>
         </div>
      </>
   )
}

export default SignUp;