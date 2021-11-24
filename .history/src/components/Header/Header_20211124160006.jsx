import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <header>headerheaderheader</header>
         <Outlet />
         <footer>footerfooterfooter</footer>
      </>
   )
}

export default Header
