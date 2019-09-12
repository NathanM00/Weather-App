import React from 'react';
import { Grid } from '@material-ui/core';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import transformInfo from '../../utils/transformInfo';
import { Route } from 'react-router-dom';

function Week(props) {

    const [days, setDays] = React.useState([]);
    React.useEffect(function () {
        var promise = fetch('http://api.openweathermap.org/data/2.5/forecast?q=Cali,couk&APPID=3e2faa989fda1287debdc076b7287df2');

        promise.then((info) => {
            return info.json();
        })
            .then((info) => {
                var list = transformInfo(info);
                setDays(list);
            });
    }, []);

    return <Grid container spacing={3}>
        <Grid item xs={2} >
            <h2>You are in the week page panita</h2>
        </Grid>

        <Grid container spacing={3} >
            {days && days.map((item) => {
                return <Grid item md={2} xs={4} key={item.day} >
                    <WeatherCard
                        {...item}
                        //onClick={handleClick}
                        today={0}
                    />
                </Grid>
            })}
        </Grid>

        <Route path="/week/:day" render={(props) => {
           console.log(props.match.params.day);
            return null;
        }} />
    </Grid>
}

export default Week;