import React from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { Grid, CssBaseline, Button } from '@material-ui/core';
import transformInfo from '../../utils/transformInfo.js' ;
import FullReport from '../../components/FullReport/FullReport';

var today = 0;

function App() {
  const [days, setDays] = React.useState([]);
  const [data, setData] = React.useState(null);

  const handleClose = (isOpen) => {
    setData(null);
  };

  function handleClick (current){
    setData(current);
  } 

  const handleGetWeather = () => {
    var promise = fetch('http://api.openweathermap.org/data/2.5/forecast?q=Cali,couk&APPID=3e2faa989fda1287debdc076b7287df2');

    promise.then((info) =>{
        return info.json();
    })
    .then((info) => {
      var list = transformInfo(info);
      setDays(list);
    });
  }

  return (
    <div className="App">
          <Button onClick={handleGetWeather} variant="contained" color="primary">
            Get Weather Info
          </Button>
          
          <Grid container spacing={3} >
              {days && days.map((item) => {
                return <Grid item md={2} xs={4} key={item.day} >
                  <WeatherCard 
                    {...item}
                    onClick={handleClick}
                    today={today}
                  />
                </Grid> 
              })}
          </Grid>

          {data !== null && <FullReport    
            {...data}
            open={data !== null}
            onClick={handleClose}
            today={today}
          />}

          <CssBaseline/>
    </div>
    
  );
}

export default App;