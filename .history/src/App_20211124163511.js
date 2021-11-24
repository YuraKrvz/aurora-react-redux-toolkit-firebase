import AppRouter from './components/AppRouter/AppRouter';

function App() {
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
