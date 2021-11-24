// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
// import HomeGuest from '././pages/HomeGuest';
// import HomeUser from '././pages/HomeUser';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

// function App() {
//   const isAuth = false
//   return (
//     <>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={ <Header /> }>
//             {isAuth ? (
//               <>
//                 <Route path='/' element={<HomeUser />} />
//                 <Route path='/signIn' element={<SignIn />} />
//                 <Route path='/signUp' element={<SignUp />} />
//               </>
//               ): (
//               <Route index element={<HomeGuest />} />
//             )}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeGuest from '././pages/HomeGuest';
import HomeUser from '././pages/HomeUser';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  const isAuth = false
  return (
    <>
    <BrowserRouter>
      <Routes>
                <Route path='/' element={<HomeUser />} />
                <Route path='/signIn' element={<SignIn />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route index element={<HomeGuest />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;