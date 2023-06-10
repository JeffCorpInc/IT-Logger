// Main App component, where all the component will be displayed



// imports
import React, { Fragment, useEffect } from 'react';
import SearchBar from './Components/Layouts/SearchBar';
import Logs from './Components/logs/Logs';
import Addbtn from './Components/Layouts/Addbtn';
import AddLogModal from './Components/logs/AddLogModal';

import './App.css';

// materialize default css and js
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {

  // useEffect is a hook that runs after the component is rendered
  useEffect(() => {
      
    // initialize materialize js
    M.AutoInit();
  });

  return (

    <Fragment>
      {/* search bar Component */}
      <SearchBar/>
      <div className='container'>
        <Addbtn/>
        <AddLogModal/>
        <Logs/>
      </div>

    </Fragment>
  );
}

export default App;
