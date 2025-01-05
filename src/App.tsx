import Home from './component/homePage';
import  { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = `ruchami sova project`;
  });
  return (
    <>
    <Home></Home>
    </>
  )
}

export default App

