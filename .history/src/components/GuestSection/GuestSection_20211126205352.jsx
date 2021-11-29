import s from './GuestSection.module.css';
import React, {useState, useEffect} from 'react';
import { useAuthorization } from '../../hooks/useAuthorization';

const GuestSection = ({user}) => {
      const {email} = useAuthorization();
      // const root = document.querySelector(':root');
      const root = document.documentElement; 
      root.style.setProperty('--color-black', 'red')
      console.log(root.style['--color-black'])


   const {isAuth} = useAuthorization();

   return (
      <>
         <section className={s.guest_section}>
            <h2 className={s.title}>Hello! Welcome to Aurora</h2>
            <h2> {email}1</h2>
         </section>
         <section>
            <label className={s.section_register_field}>
               <p className={s.text}>New arrivals. Exclusive previews. First access to sales. Sign up to stay in the know.</p>
               <label className={s.input_wrap}>
                  <input className={s.section_register_input} type="text" placeholder='Your email address' />
                  <button className={s.section_register_btn} >register</button>
               </label>
            </label>
         </section>
      </>
   )
}

export default GuestSection
