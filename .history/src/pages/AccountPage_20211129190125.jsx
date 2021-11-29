import s from '../components/MainSection/MainSection.module.css';
import {useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { setLogout } from '../store/slices/userSlice';

const AccountPage = () => {
   const navigate = useNavigate ();
   const dispatch = useDispatch();

   function handler(){
      dispatch(setLogout());
      navigate('/');
   }
   return (
      <div  style={{height: '40vh', width: '800px'}}  className={s.section_register_field}>
      
      <label className={s.input_wrap}>
         <button className={s.section_register_btn} onClick={handler} >Logout</button>
      </label>
   </div>
   )
}

export default AccountPage
