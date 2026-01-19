import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import App_Description from './components/App_Description';
import BackgroundImage from './components/BackgroundImage';
import Footer from './components/Footer';
import Start from './pages/Start';
import Landing from './pages/Landing';
import New_Room from './pages/New_Room';
import Existing_Room from './pages/Existing_Room'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
  <div className="AppRoot">
    <Header />
    <BackgroundImage />

    
    <div className="Boxes-wrapper">
      <Routes>

        <Route path="/" element={<Landing />}></Route>

        <Route path="start" element = {<Start />}></Route>

      </Routes>
    </div>

    <Routes>
        <Route path = "/new-room" element={<New_Room/>}></Route>
      <Route path = "/existing-room" element={<Existing_Room/>}></Route>


    </Routes>

    <Footer />
  </div>
</BrowserRouter>
  );
}

export default App;
