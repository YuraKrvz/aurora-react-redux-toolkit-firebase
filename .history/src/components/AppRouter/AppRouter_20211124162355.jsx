import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
// import {guestRoutes} from './routes';
import HomeGuest from '../../pages/HomeGuest';
import HomeUser from '../../pages/HomeUser';

const AppRouter = () => {
   const isAuth = false;

   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={ <Header /> }>
               {isAuth ? (
                  <Route  />
               ): (
                  <>
                  </>
               )}
            </Route>
         </Routes>
    </BrowserRouter>
   )
}

export default AppRouter
