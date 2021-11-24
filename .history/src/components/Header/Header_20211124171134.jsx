import React from 'react';
import { NavLink as Navlink, Outlet } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <header>
         HEADER
            <ul>
               <li>
                  <Navlink NavLink to='/' >home</Navlink>
                  <Navlink NavLink to='signIn' >signIn</Navlink>
                  <Navlink NavLink to='signUp' >signUp</Navlink>
               </li>
            </ul>
         </header>
         <Outlet />
         <footer>footerfooterfooter</footer>
      </>
   )
}

export default Header
