import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useAuthorization } from '../../hooks/useAuthorization';
import GlobalSvgSelector from '../../source/GlobalSvgSelector';
import OverHeader from './OverHeader/OverHeader';

const Header = () => {
   const {isAuth, email} = useAuthorization();
   return (
      <>
         <header>
         <OverHeader />
         <div className={s.header_body}>
            <h1 className={s.header_title}>Aurora</h1>
            <input className={s.header_searcher} type="text" placeholder="What are you looking for?" />
            <div>
               <div className={s.header_user}>Sign in  |  Register <GlobalSvgSelector id="basket" /></div>

            </div>
         </div>


         HEADER / Aurora
         <h6>{email}</h6>
            <ul>
               <li>
                  <NavLink  to='/' >home</NavLink>
                  <NavLink  to='/signIn' >signIn</NavLink>
                  <NavLink  to='/signUp' >signUp</NavLink>
               </li>
            </ul>
         </header>

      </>
   )
}

export default Header
