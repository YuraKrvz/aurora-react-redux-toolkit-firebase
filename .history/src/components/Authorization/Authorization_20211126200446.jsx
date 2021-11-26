import s from './Authorization.module.css';
import GlobalSvgSelector from '../../source/GlobalSvgSelector';
import { useAuthorization } from '../../hooks/useAuthorization';

const Authorization = () => {
   const {isAuth, email, id} = useAuthorization();

   return (
      <>
         <div className={s.header_user}>Sign in  |  Register <GlobalSvgSelector id="basket" color='black'/></div>
      </>
   )
}

export default Authorization
