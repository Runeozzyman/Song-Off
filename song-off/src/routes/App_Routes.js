import React from 'react';
import Boxes_Layout from '../layouts/Boxes_Layout';
import Landing from '../pages/Landing'; 
import Login from '../pages/Login';
import { Route, Routes } from 'react-router-dom';
import Create_Account from '../pages/Create_Account';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Submission_Page from '../pages/Submission_Page';

  const App_Routes = () =>  {
	return (
	  
              <Routes>
        
                  <Route element={<Boxes_Layout />}>

                    <Route index element={<Landing />}></Route>
                    <Route path="create-account" element={<Create_Account />}></Route>
                    <Route path="login" element= {<Login />}></Route>
                  </Route>

                  
                  <Route path="submit" element={<Submission_Page/>}></Route>
                  <Route path = "/profile" element={<Profile/>}></Route>
                  <Route path = "/home" element = {<Home/>}></Route>
        
              </Routes>
	  
	);
  }
  
  export default App_Routes;
  