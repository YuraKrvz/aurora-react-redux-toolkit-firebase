import s from './GuestSection.module.css';

const GuestSection = ({user}) => {
   return (
      <>
         <section className={s.guest_section}>
            <h2 className={s.title}>Hello! Welcome to Aurora  {user}</h2>
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
