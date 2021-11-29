import s from './GuestSection.module.css';
import React, {useState, useEffect} from 'react';


const GuestSection = ({isAuth}) => {
   const guest = './insta.svg';
   const user = './user.svg'
      // const root = document.querySelector(':root');
      // const root = document.documentElement; 
      // root.style.setProperty('--color-black', 'red')
      // console.log(root.style)
   let one = document.querySelector('.guest_section').style.backgroundImage = user;
   return (
      <>
         <section className={s.guest_section}>
            <h2 className={s.title}>Hello! Welcome to Aurora</h2>
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
