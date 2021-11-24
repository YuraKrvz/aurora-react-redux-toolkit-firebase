import React from 'react';

const AppRouter = () => {
   const isAuth = false;

   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={ <Header /> }>
               { isAuth ? () : ()
                  guestRoutes.map( ({path, component}) => (
                  <Route path={path} element={component} key={path} />
                  ) )
               }
            </Route>
         </Routes>
    </BrowserRouter>
   )
}

export default AppRouter
