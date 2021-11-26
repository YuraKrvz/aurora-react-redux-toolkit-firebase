import s from './Authorization.module.css';
import GlobalSvgSelector from '../../source/GlobalSvgSelector';
import { useAuthorization } from '../../hooks/useAuthorization';
// import { NavLink } from 'react-router-dom';

const Authorization = () => {
   const {isAuth, email, id} = useAuthorization();

   return (
      <>
         {!isAuth ? (
            <div className={s.header_user}>Sign in  |  Register <GlobalSvgSelector id="basket" color='black'/></div>
         ) : (
            <p className={s.login}>{email}</p>
         )}
         
      </>
   )
}

export default Authorization
