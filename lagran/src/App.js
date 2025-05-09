import React from "react";



import Header from './components/Header/Header/Header.jsx'
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {

  return (
    <div className="App">
      <div className='WRAPER'>
        <Header/>
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
