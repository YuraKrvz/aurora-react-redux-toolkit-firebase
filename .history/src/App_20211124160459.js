import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import {guestRoutes} from './components/AppRouter/routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Header /> }>
          {
            guestRoutes.map( ({path, component}) => (
              <Route path={path} element={component} />
            ) )
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
