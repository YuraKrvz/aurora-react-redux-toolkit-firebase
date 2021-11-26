const GuestSection = () => {
   return (
      <>
         <section className={s.guest_section}>
            <h2>Hello! Welcome to Aurora</h2>
         </section>
         <section>
            <p>New arrivals. Exclusive previews. First access to sales. Sign up to stay in the know.</p>
            <label className={s.section_register_field}>
               <input className={s.section_register_input} type="text" placeholder='Your email address' />
               <button className={s.section_register_input} >register</button>
            </label>
         </section>

      </>
   )
}

export default GuestSection
