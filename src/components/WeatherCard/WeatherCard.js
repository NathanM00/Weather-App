import React from 'react';
import {Card,CardContent, makeStyles} from '@material-ui/core'

function WeatherCard(props) {
    const classes = useStyles();
    const darkClasses = darkStyles();
    var  colorScheme = classes;

    function handleClick(){
        if(typeof props.onClick ==='function'){
            props.onClick(props);
        }
    }

    if(props.today === props.num){ 
        colorScheme = darkClasses ;
    }

        return (
            <Card className={colorScheme.container} onClick={handleClick}>
                <CardContent className={colorScheme.content}>
                    <h3 className={colorScheme.title}>{props.day}</h3>
                    <img className={colorScheme.icon} src={props.icon} alt=""></img>
                    <p className={colorScheme.data}>
                        <span>{props.max}</span> 
                        {props.min}
                    </p>
                </CardContent>
            </Card>
        );
}

const useStyles = makeStyles(theme => ({

    title: {
        fontSize: 35,
        margin: 0,
        color: '#40a3ff',
    },
    icon:{
        width: '100px',
        marginTop: '10px',
        marginBottom: '10px',
    },
    data:{
        fontSize: 20,
        margin: 0,
        color: theme.palette.grey[500],
        '& span':   {
            color: '#40a3ff',
        },
    },
    content:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
    },
    container:{
        margin: '10px 10px',
    },

}));
const darkStyles = makeStyles(theme => ({

    title: {
        fontSize: 35,
        margin: 0,
        color:'#FFDB3C',
    },
    icon:{
        width: '100px',
        marginTop: '10px',
        marginBottom: '10px',
    },
    data:{
        fontSize: 20,
        margin: 0,
        color: theme.palette.grey[200],
        '& span':   {
            color: '#FFDB3C',
        },
    },
    content:{
            backgroundColor: theme.palette.grey[900],
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
    },
    container:{
        margin: '10px 10px',
    },

}));
export default WeatherCard;