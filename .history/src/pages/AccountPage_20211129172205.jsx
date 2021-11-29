import s from '../components/MainSection/MainSection.module.css';

const AccountPage = () => {
   return (
      <div  style={{height: '40vh', width: '800px'}}  className={s.section_register_field}>
      ACCOUNT
      <label className={s.input_wrap}>
         <input className={s.section_register_input} ref={emailRef} type="email" placeholder='Your email address' />
         <input className={s.section_register_input} ref={passwordRef} type="password" placeholder='Your password' />
         <button className={s.section_register_btn} onClick={handler} >Sign In</button>

      </label>
   </div>
   )
}

export default AccountPage
