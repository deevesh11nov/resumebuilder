
import React from 'react';
import Navbar from './pages/navbar';
import Home from './pages/Home';
import DetailNavbar from './pages/Detailsfilling/DetailNavbar';
import Personalinfo from './pages/Detailsfilling/Personalinfo';


const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Home />  */}
       <DetailNavbar/>
      <Personalinfo />
     
    </div>
  );
};

export default App;

