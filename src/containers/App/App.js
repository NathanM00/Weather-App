import React from 'react';
import {CssBaseline } from '@material-ui/core';
import FullReport from '../../components/FullReport/FullReport';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Week from '../Week/Week';

var today = 0;

function App() {
  const [data, setData] = React.useState(null);

  const handleClose = (isOpen) => {
    setData(null);
  };

  return (
    <Router>
      <div className="App">
        <h1>En toda parte</h1>

        <Route path="/" exact component ={Home}/>
        <Route path="/week" component ={Week}/>

        <CssBaseline />
      </div>
    </Router>

  );
}

export default App;