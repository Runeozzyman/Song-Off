import React from 'react';
import Boxes_Layout from '../layouts/Boxes_Layout';
import Landing from '../pages/Landing';
import Start from '../pages/Start';
import New_Room from '../pages/New_Room';
import Existing_Room from '../pages/Existing_Room';
import Created_Room from '../pages/Created_Room';
import Lobby from '../pages/Lobby'; 
import Login from '../pages/Login';
import { Route, Routes } from 'react-router-dom';
import Create_Account from '../pages/Create_Account';
import Home from '../pages/Home';

  const App_Routes = () =>  {
	return (
	  <div>
              <Routes>
        
                  <Route element={<Boxes_Layout />}>
                    <Route index element={<Landing />}></Route>
                    <Route path="login" element= {<Login />}></Route>
                    <Route path="create-account" element={<Create_Account />}></Route>
                    <Route path="start" element = {<Start />}></Route>
                  </Route>

                  <Route path = "/home" element = {<Home/>}></Route>
                  <Route path = "/new-room" element={<New_Room/>}></Route>
                  <Route path = "/existing-room" element={<Existing_Room/>}></Route>
                  <Route path = "/lobby/:roomCode" element={<Lobby/>}></Route>
                  <Route path = "/new-room/game-room" element={<Created_Room/>}></Route>
        
              </Routes>
	  </div>
	);
  }
  
  export default App_Routes;
  