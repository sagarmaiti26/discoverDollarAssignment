import WebFont from 'webfontloader';
import Footer from './components/Layouts/Footer/Footer';
import Header from './components/Layouts/Navbar/Header';

import { useEffect } from 'react';

import Home from './components/Home/Home';


function App() {

 useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:300,400,500,600,700"]
      },
    });
  });
  return (
    <>
      <Header />
      <Home/>
      <Footer />
    </>
  );
}

export default App;
