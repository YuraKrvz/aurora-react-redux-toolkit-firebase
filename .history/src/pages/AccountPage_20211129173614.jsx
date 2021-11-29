import s from '../components/MainSection/MainSection.module.css';
import { logout } from '../firebase';
import {useHistory} from 'react-router-dom';

const AccountPage = () => {
   const history = useHistory();
   async function handler(){
      try{
         await logout();
         history.push('/')
      }catch{

      }
   }
   return (
      <div  style={{height: '40vh', width: '800px'}}  className={s.section_register_field}>
      
      <label className={s.input_wrap}>
      ACCOUNT  
         <input className={s.section_register_input} type="email" placeholder='Your email address' />
         <input className={s.section_register_input}  type="password" placeholder='Your password' />
         <button className={s.section_register_btn} onClick={handler} >Logout</button>

      </label>
   </div>
   )
}

export default AccountPage
