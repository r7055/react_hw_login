import { useEffect } from 'react';
import { router } from './Router';
import { Outlet, RouterProvider } from 'react-router';
// import Header from './component/Heder';

function App() {
  useEffect(() => {
    document.title = `ruchami sova project`;
  });
  return (
    <>
     {/* <Header/> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App

