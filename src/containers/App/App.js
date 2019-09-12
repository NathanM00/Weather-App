import React from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { Grid, CssBaseline, Button } from '@material-ui/core';
import moment from 'moment';
import FullReport from '../../components/FullReport/FullReport';

var today = 0;

function App() {
  const [days, setDays] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);

  const handleOpen = (info) => {
    setData(info);
    setOpen(true);
  };

  const handleClose = (isOpen) => {
    if(isOpen){
      setOpen(false);
    }
  };


  const handleGetWeather = () => {
    var promise = fetch('http://api.openweathermap.org/data/2.5/forecast?q=Cali,couk&APPID=3e2faa989fda1287debdc076b7287df2');

    promise.then((info) =>{
        return info.json();
    })
    .then((info) => {
      var list = info.list.filter((elem, index) => {
        return index % 8 ===0
      }).map((elem, index, array) => {
        var city = info.city.name;
        var country = info.city.country;
          return{
                day: moment.unix(elem.dt).format('ddd'),      
                fullDay: moment.unix(elem.dt).format('dddd'),      
                icon: `http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`,
                min: Math.round(elem.main.temp_min -273.15)+ '°',
                max: Math.round(elem.main.temp_max -273.15) + '°',
                num: index,
                country: country,
                city: city,
                hum: elem.main.humidity,
                speed: elem.wind.speed,
                desc: elem.weather[0].description,
                dir: elem.wind.deg,
                pre: elem.main.pressure,
              };
          });

      setDays(list );
    });
  }

  function handleClick (current){
    handleOpen(current);
  } 

  return (
    <div className="App">
          <Button onClick={handleGetWeather} variant="contained" color="primary">
            Get Weather Info
          </Button>
          
          <Grid container spacing={3} >
              {days && days.map((item) => {
                return <Grid item md={2} xs={4} key={item.day} >
                          <WeatherCard onClick={handleClick}
                          day={item.day}
                          icon={item.icon}
                          fullDay={item.fullDay}
                          min={item.min}
                          max={item.max}
                          pre={item.pre}
                          city={item.city}
                          country={item.country}
                          speed={item.speed}
                          dir={item.dir}
                          num={item.num}
                          desc={item.desc} 
                          hum={item.hum}
                          to={today}
                          />
                      </Grid> 
              })}
          </Grid>
          <FullReport    
                          open={open}
                          onClick={handleClose}
                          day={data.day}
                          fullDay={data.fullDay}
                          pre= {data.pre}
                          desc={data.desc}  
                          city={data.city}
                          country={data.country}
                          min={data.min}
                          max={data.max}
                          speed={data.speed}
                          dir={data.dir}
                          icon={data.icon}
                          hum={data.hum}
                          num={data.num}
                          to={today}
          />

          <CssBaseline/>
    </div>
    
  );
}

export default App;