import React, {useRef, useState} from 'react';
import s from '../components/MainSection/MainSection.module.css';
import {signIn} from '../firebase';
import {useDispatch} from 'react-redux';
import {setLogin} from '../store/slices/userSlice';

const SignIn = () => {
   const [error, setError] = useState(false);
   const dispatch = useDispatch();
   let emailRef = useRef();
   let passwordRef = useRef();

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
         <div  style={{height: '40vh', width: '800px'}}  className={s.section_register_field}>
            <label className={s.input_wrap}>
               <input className={s.section_register_input} ref={emailRef} type="email" placeholder='Your email address' />
               <input className={s.section_register_input} ref={passwordRef} type="password" placeholder='Your password' />
               <button className={s.section_register_btn} onClick={handler} >Log In</button>

            </label>

            {error && <h1
               style={{fontSize: '12px', color: 'red', textAlign: 'center'}}
               >Account is not found</h1>}
            "p"
         </div>
      </>
   )
}

export default SignIn;
