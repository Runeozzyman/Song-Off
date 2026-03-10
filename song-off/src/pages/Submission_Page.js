import React from 'react';
import Search_Song from '../components/Search_Song';
import './page-css/Submission_Page.css'
import useProtect from '../hooks/useProtect';

  const Submission_Page = () =>  {

    const checking = useProtect();
    if(!checking) return null;

	return (
	  <div className='search-container'>
        <Search_Song/>
	  </div>
	);
  }
  
  export default Submission_Page;
  