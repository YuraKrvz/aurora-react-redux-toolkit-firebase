import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthorization } from '../../hooks/useAuthorization';

const Header = () => {
   const {isAuth, email} = useAuthorization();
   return (
      <>
         <header>
         HEADER
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
