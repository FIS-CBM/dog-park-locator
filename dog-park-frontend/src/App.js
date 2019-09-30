import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App container-fluid">
      <div className='navbar-wrapper'>
        <Nav />
      </div>
    </div>

    </Router>
  );
}

export default App;
