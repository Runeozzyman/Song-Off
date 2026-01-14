import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import App_Description from './components/App_Description';
import BackgroundImage from './components/BackgroundImage';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <div className='AppRoot'>
          <Header />
          <BackgroundImage/>

          <div className='Boxes-wrapper'>
            <App_Description />  
            <Home />
          </div>

          <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
