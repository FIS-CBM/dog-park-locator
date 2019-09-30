import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Parks from './containers/Parks'

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <Nav />
        <Route exact path='/' component={Landing} />
        <Route exact path='/parks' component={Parks} />
      </div>
    </Router>
  );
}

export default App;
