import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <header>
         HEADER
            <ul>
               <li>
                  <NavLink NavLink to='/' >home</NavLink>
                  <NavLink NavLink to='signIn' >signIn</NavLink>
                  <NavLink NavLink to='signUp' >signUp</NavLink>
               </li>
            </ul>
         </header>
         <Outlet />
         <footer>footerfooterfooter</footer>
      </>
   )
}

export default Header
