import s from './Authorization.module.css';
import GlobalSvgSelector from '../../source/GlobalSvgSelector';
import { useAuthorization } from '../../hooks/useAuthorization';
import { NavLink } from 'react-router-dom';

const Authorization = () => {
   const {isAuth, email, id} = useAuthorization();

   return (
      <>
         {!isAuth ? (
            <div >
               <NavLink to='/signIn' className={s.header_user}>
                  Sign in
               </NavLink>  |  
               <NavLink to='/signUn' className={s.header_user}>
                  Sign Up
               </NavLink> 
               <GlobalSvgSelector id="basket" color='black'/>
            </div>
         ) : (
            <>
               <p className={s.login}>Hi, {email}!</p>
               <GlobalSvgSelector id="basket" color='black'/>
            </>
         )}
         
      </>
   )
}

export default Authorization
