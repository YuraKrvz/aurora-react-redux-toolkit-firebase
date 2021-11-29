import s from '../components/MainSection/MainSection.module.css';

const AccountPage = () => {
   return (
      <div  style={{height: '40vh', width: '800px'}}  className={s.section_register_field}>
      <label className={s.input_wrap}>
         <input className={s.section_register_input} ref={emailRef} type="email" placeholder='Your email address' />
         <input className={s.section_register_input} ref={passwordRef} type="password" placeholder='Your password' />
         <button className={s.section_register_btn} onClick={handler} >Sign In</button>

      </label>
      {error && <h1
         style={{fontSize: '12px', color: 'red', textAlign: 'center'}}
         >Account is not found</h1>}
   </div>
   )
}

export default AccountPage
