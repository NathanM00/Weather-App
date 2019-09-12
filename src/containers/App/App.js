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

  function handleClick(current) {
    setData(current);
  }

  return (
    <Router>
      <div className="App">
        <h1>En toda parte</h1>

        <Route path="/" exact component ={Home}/>
        <Route path="/week" exact component ={Week}/>

        {data !== null && <FullReport
          {...data}
          open={data !== null}
          onClick={handleClose}
          today={today}
        />}

        <CssBaseline />
      </div>
    </Router>

  );
}

export default App;