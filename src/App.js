import React from 'react';
import './style.css';
import { appData } from './data/appData';
import NavbarComponent from './Components/navbar';
import MainComponent from './Components/main';
import FooterComponent from './Components/footer';

const App = () => {
  const { navData, mainData, footerData }  = appData;
  return (
    <>
      {/* Navbar */}
      <NavbarComponent {...navData} />

      {/* main section */}
      <MainComponent {...mainData}/>

      {/* footer section */}
      <FooterComponent {...footerData}/>
    </>
  )
}

export default App
