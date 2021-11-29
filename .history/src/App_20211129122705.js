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
import {useAuthorization} from './hooks/useAuthorization'
// import './firebase';


function App() {
  const {isAuth} = useAuthorization();
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header />
        
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;