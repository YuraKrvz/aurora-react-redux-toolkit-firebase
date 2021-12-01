import s from './Authorization.module.css';
import GlobalSvgSelector from '../../source/GlobalSvgSelector';
import { useAuthorization } from '../../hooks/useAuthorization';
import { NavLink } from 'react-router-dom';

const Authorization = () => {
   const {isAuth, email} = useAuthorization();

   return (
      <>
         {!isAuth ? (
            <div >
               <NavLink to='/signIn' className={s.header_user} activeClassName="active-nav">
                  Sign in
               </NavLink>  
               |  
               <NavLink to='/signUp' className={s.header_user}>
                  Sign Up
               </NavLink> 
               <GlobalSvgSelector id="basket" color='black'/>
            </div>
         ) : (
            <div className={s.login_field}> 
               <NavLink to='/account' className={s.login}>Hi, {email}!</NavLink>
               <GlobalSvgSelector id="basket" color='black'/>
            </div>
         )}
         
      </>
   )
}

export default Authorization
