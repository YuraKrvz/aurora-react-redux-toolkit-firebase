import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <header>
         HEADER
            <ul>
               <li>
                  <Link NavLink to='/' >home</Link>
                  <Link NavLink to='signIn' >signIn</Link>
                  <Link NavLink to='signUp' >signUp</Link>
               </li>
            </ul>
         </header>
         <Outlet />
         <footer>footerfooterfooter</footer>
      </>
   )
}

export default Header
