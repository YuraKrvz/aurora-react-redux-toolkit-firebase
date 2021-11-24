import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <header></header>
         <Outlet />
         <footer></footer>
      </>
   )
}

export default Header
