import { getCurrentUser, getUsername, userLogin } from '../services/userService';
import { useEffect, useState } from 'react';
import './component-css/Header.css';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';
import { FaHome, FaVoteYea } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";

  const Header = () =>  {
    
  const[username, setUsername] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
  async function getUserData() {
    const usr = await getCurrentUser();
    setUser(usr);

    if (usr) {
      const uname = await getUsername();
      setUsername(uname);
    } else {
      setUsername(null);
    }
  }

  getUserData();

  const { data: listener } = supabase.auth.onAuthStateChange(
    () => {
      getUserData();
    }
  );

  return () => listener.subscription.unsubscribe();
}, []);

	return (
    
  <div className="header">

  {user &&
    <div className='header-navbar-left'>
      <Link to="/home"><FaHome size={40}/></Link>
      <Link to="/leaderboard"><MdLeaderboard size={40}/></Link>
      <Link to="/submit"><FaVoteYea size={40}/></Link>
    </div>
  }


    <div className="header-center">
        <Link to="/" className="logo">
          <h1>Song Off</h1>
        </Link>

        <h3>Think you've got good taste? Prove it.</h3>
    </div>
  
    <div className="header-nav">
  {user && (
    <Link to="/profile" className="username">
      {username}
    </Link>
  )}
</div>

</div>
    	  
	);
  }
  
  export default Header;
  