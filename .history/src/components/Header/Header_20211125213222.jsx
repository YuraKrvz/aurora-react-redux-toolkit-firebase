import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthorization } from '../../hooks/useAuthorization';
import OverHeader from './OverHeader/OverHeader';

const Header = () => {
   const {isAuth, email} = useAuthorization();
   return (
      <>
         <header>
         <OverHeader />
         <div className={s.header_body}>
            <h1 className={s.header_title}>Aurora</h1>
            <input className={s.header_searcher} type="text" />
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
