import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomRouter from './components/CustomRouter/CustomRouter'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Provider} from 'react-redux';
import {store} from './store';
// import './firebase';

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <CustomRouter />
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;