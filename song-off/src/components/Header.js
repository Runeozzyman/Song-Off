  import './component-css/Header.css';
  import { Link } from 'react-router-dom';

  const Header = () =>  {
    
	return (
	  <div className="header">
        <Link to="/"

          style={{ 
            textDecoration: 'none', 
            color: 'inherit'
          }}
          
        >
          <h1>Song Off</h1>
        </Link>
        <h3>Think you've got good taste? Prove it.</h3>
	  </div>
	);
  }
  
  export default Header;
  