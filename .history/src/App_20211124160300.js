import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import {routes} from './components/AppRouter/routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Header /> }>
          {
            routes.map( ({path, component}) => {
              
            } )
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
