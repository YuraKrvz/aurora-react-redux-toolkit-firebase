import s from '../components/MainSection/MainSection.module.css';
import { logout, auth } from '../firebase';
import {useNavigate } from "react-router-dom"

const AccountPage = () => {
   const navigate = useNavigate ();
   async function handler(){
      try{
         await logout();
         navigate('/');
      }catch{

      }
   }
   async function handler2(){
      await auth.signOut();
   }
   return (
      <div  style={{height: '40vh', width: '800px'}}  className={s.section_register_field}>
      
      <label className={s.input_wrap}>
      ACCOUNT  
         <input className={s.section_register_input} type="email" placeholder='Your email address' />
         <input className={s.section_register_input}  type="password" placeholder='Your password' />
         <button className={s.section_register_btn} onClick={handler} >Logout</button>
         <button className={s.section_register_btn} onClick={handler2} >handler2</button>

      </label>
   </div>
   )
}

export default AccountPage
