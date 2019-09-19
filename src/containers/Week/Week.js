import React from 'react';
import { Grid } from '@material-ui/core';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import transformInfo from '../../utils/transformInfo';
import { Route } from 'react-router-dom';
import FullReport from '../../components/FullReport/FullReport';

var today = 0;

function Week(props) {
    const [data, setData] = React.useState(null);
    const [days, setDays] = React.useState([]);

    function handleClick(current) {
        setData(current);
        props.history.push('/week/' + current.day);
    }

    const handleClose = (isOpen) => {
        setData(null);
    };

    React.useEffect(function () {
        var promise = fetch('http://api.openweathermap.org/data/2.5/forecast?q=Cali,couk&APPID=3e2faa989fda1287debdc076b7287df2');

        promise.then((info) => {
            return info.json();
        })
            .then((info) => {
                var list = transformInfo(info);
                var url = document.URL;
                url = url.replace('http://localhost:3000/week/','');
                setDays(list);
                for (var i = 0; i < list.length; i++) {
                    console.log(url);
                    console.log(list[i]);
                    if( list[i].day === url){
                        setData(list[i]);
                    }
                }
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
                        onClick={handleClick}
                        today={0}
                    />
                </Grid>
            })}
        </Grid>

        <Route path="/week/:day" render={() => {
            return (
                
                <FullReport
                    {...data}
                    open={data !== null}
                    onClick={handleClose}
                    today={today}
                />
            )
        }} />
    </Grid>
}

export default Week;