import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeGuest from '././pages/HomeGuest';
import HomeUser from '././pages/HomeUser';

function App() {
  const [isAuth, set] = useState(false);
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Header /> }>
            {isAuth ? (
              <Route index element={<HomeGuest />} />
            ): (
              <Route index element={<HomeUser />} />
            )}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
