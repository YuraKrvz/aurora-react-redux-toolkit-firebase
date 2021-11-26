import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeGuest from '././pages/HomeGuest';
import HomeUser from '././pages/HomeUser';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {Provider} from 'react-redux';
import {store} from './store';
// import './firebase';


function App() {
  const isAuth = false
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header />
        <Routes>
          // {
          //   isAuth ? (
          //     <>
          //         <Route path='/' element={<HomeUser />} />
          //         <Route path='/signIn' element={<SignIn />} />
          //         <Route path='/signUp' element={<SignUp />} />
          //     </>
          //   ) : (
          //     <>
          //       <Route path='/' element={<HomeGuest />} />
          //       <Route path='/signIn' element={<SignIn />} />
          //       <Route path='/signUp' element={<SignUp />} />
          //     </>
          //   )
          // }
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;