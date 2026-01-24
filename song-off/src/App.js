import './App.css';
import Header from './components/Header';
import BackgroundImage from './components/BackgroundImage';
import Footer from './components/Footer';
import App_Routes from './routes/App_Routes';

import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
<BrowserRouter>
  <div className="AppRoot">
    <Header />
    <div className = "bg-img"><BackgroundImage /></div>

      <App_Routes />
  
    <Footer />
  </div>
</BrowserRouter>
  );
}

export default App;
