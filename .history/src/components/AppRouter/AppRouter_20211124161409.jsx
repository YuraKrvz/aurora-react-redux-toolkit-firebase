import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import {guestRoutes} from './components/AppRouter/routes'

const AppRouter = () => {
   const isAuth = false;

   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={ <Header /> }>
               { isAuth ? (
                  <>
                  {guestRoutes.map( ({path, component}) => (
                     <Route path={path} element={component} key={path} />
                     ) )}
                  </>
               ) : (
                  <>
                  <div>

                  </div>
                  </>
               )
                  
               }
            </Route>
         </Routes>
    </BrowserRouter>
   )
}

export default AppRouter
