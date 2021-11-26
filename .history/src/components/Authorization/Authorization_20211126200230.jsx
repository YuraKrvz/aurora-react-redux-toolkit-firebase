import s from './Authorization.module.css';
import GlobalSvgSelector from '../../source/GlobalSvgSelector';

const Authorization = () => {

   return (
      <div>
         <div className={s.header_user}>Sign in  |  Register <GlobalSvgSelector id="basket" color='black'/></div>
      </div>
   )
}

export default Authorization
