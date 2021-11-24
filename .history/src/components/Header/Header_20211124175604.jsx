import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <header>
         HEADER
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
