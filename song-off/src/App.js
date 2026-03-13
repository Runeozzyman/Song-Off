import React from 'react';
import './App.css';
import Header from './components/Header';
import BackgroundImage from './components/BackgroundImage';
import Footer from './components/Footer';
import App_Routes from './routes/App_Routes';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useTop25PlaylistUpdater } from './hooks/useSpotifyPlaylistUpdater';


function App() {

return (
<BrowserRouter>
  <div className="AppRoot">
    <Header />
    <BackgroundImage />
    <div className='main-content'>
      <App_Routes />
    </div>
      
  
    <Footer />
  </div>
</BrowserRouter>
  );

}

export default App;
