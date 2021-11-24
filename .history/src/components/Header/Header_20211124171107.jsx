import React from 'react';
import { NavLink as navlink, Outlet } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <header>
         HEADER
            <ul>
               <li>
                  <navlink NavLink to='/' >home</navlink>
                  <navlink NavLink to='signIn' >signIn</navlink>
                  <navlink NavLink to='signUp' >signUp</navlink>
               </li>
            </ul>
         </header>
         <Outlet />
         <footer>footerfooterfooter</footer>
      </>
   )
}

export default Header
