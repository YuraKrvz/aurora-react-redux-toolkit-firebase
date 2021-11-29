import { Routes, Route } from 'react-router-dom';

import {useAuthorization} from './hooks/useAuthorization'

const CustomRouter = () => {
   const {isAuth} = useAuthorization();

   return (
      <>
      <Routes>
         {
         isAuth ? (
            <>
               <Route path='/' element={<HomeUser />} />
               <Route path='/signIn' element={<SignIn />} />
               <Route path='/signUp' element={<SignUp />} />
            </>
         ) : (
            <>
               <Route path='/' element={<HomeGuest />} />
               <Route path='/signIn' element={<SignIn />} />
               <Route path='/signUp' element={<SignUp />} />
            </>
         )
         }
      </Routes>
      </>
   )
}

export default CustomRouter
