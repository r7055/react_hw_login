import { useEffect } from 'react';
import { router } from './Router';
import { RouterProvider } from 'react-router';

function App() {
  useEffect(() => {
    document.title = `ruchami sova project`;
  });
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

