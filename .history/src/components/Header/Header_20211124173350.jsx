import React from 'react';
import { NavLink as Navlink, Outlet } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <header>
         HEADER
            <ul>
               <li>
                  <Navlink  to='/' >home</Navlink>
                  <Navlink  to='signIn' >signIn</Navlink>
                  <Navlink  to='signUp' >signUp</Navlink>
               </li>
            </ul>
         </header>
         <Outlet />
         <footer>footerfooterfooter</footer>
      </>
   )
}

export default Header
