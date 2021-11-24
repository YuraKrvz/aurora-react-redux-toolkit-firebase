import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Header /> }>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
