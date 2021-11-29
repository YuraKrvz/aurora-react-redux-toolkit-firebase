import s from './GuestSection.module.css';
import React from 'react';
import { useAuthorization } from '../../hooks/useAuthorization';


const GuestSection = () => {
   const {isAuth, email} = useAuthorization();
   const classSection = [s.section, isAuth ? s.user : s.guest].join(' ');

   return (
      <>
         <section className={classSection}>
            <h2 className={s.title}>Hello! Welcome to Aurora, {email}</h2>
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
