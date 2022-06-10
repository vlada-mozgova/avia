import './App.css';
import React from 'react';
import pic from './images/logo_plane.png';
import { FrontBar } from './components/FrontBar';
import { SideBar } from './components/SideBar';
import { MainProvider } from './contexts/MainContext';
import { TicketProvider } from './contexts/TicketContext';

function App() {

  return (
    <MainProvider>
      <div className="App">
        <img src={pic} className="img-plane" alt='plane' />
        <div className='App-div'>
          <SideBar />
          <TicketProvider>
            <FrontBar />
          </TicketProvider>
        </div>
      </div>
    </MainProvider>
  );
}

export default App;
