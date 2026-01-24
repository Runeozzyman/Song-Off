import React from 'react';
import Boxes_Layout from '../layouts/Boxes_Layout';
import Landing from '../pages/Landing';
import Start from '../pages/Start';
import New_Room from '../pages/New_Room';
import Existing_Room from '../pages/Existing_Room';
import Created_Room from '../pages/Created_Room'; 
import { Route, Routes } from 'react-router-dom';

  const App_Routes = () =>  {
	return (
	  <div>
        <Routes>
        
                  <Route element={<Boxes_Layout />}>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="start" element = {<Start />}></Route>
                  </Route>
        
                  <Route path = "/new-room" element={<New_Room/>}></Route>
                  <Route path = "/existing-room" element={<Existing_Room/>}></Route>
                  <Route path = "/new-room/created-room" element={<Created_Room/>}></Route>
        
              </Routes>
	  </div>
	);
  }
  
  export default App_Routes;
  