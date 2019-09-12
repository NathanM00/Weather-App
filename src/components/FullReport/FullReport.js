import React from 'react';
import { Modal, makeStyles, Button} from '@material-ui/core'

function FullReport(props) {
    const classes = useStyles();
    const darkClasses = darkStyles();
    var  colorScheme = classes;
        
    function handleClose(){
        if(typeof props.onClick ==='function'){
            props.onClick(props.open);
        }
    }
    if(props.to === props.num){ 
        colorScheme = darkClasses ;
    }

        return (
                <Modal aria-labelledby="modal-title" aria-describedby="modal-description" className={colorScheme.container} open={props.open} >
                        <div className={colorScheme.content}>
                            <section className={colorScheme.side}>
                                <h3 id="modal-title" className={colorScheme.title}>{props.fullDay}</h3>
                                <p className={colorScheme.data}>{props.city}, {props.country}</p>
                                <img className={colorScheme.icon} src={props.icon} alt="ICON"></img>
                                <p className={colorScheme.data}>{props.desc}</p>
                            </section>
                            <section id="modal-description" className={colorScheme.section}>
                                <h4 className={colorScheme.subtitles}>Information</h4>
                                <p className={colorScheme.data}><b>Temperature:</b> {props.max} - {props.min} </p>
                                <p className={colorScheme.data}><b>Atmospheric Pressure:</b> {props.pre} hPa</p>
                                <p className={colorScheme.data}><b>Wind Direction:</b> {props.dir}°</p>
                                <p className={colorScheme.data}><b>Wind Speed: </b>{props.speed}km/h</p>
                                <p className={colorScheme.data}><b>Humidity:</b> {props.hum} %</p>
                            </section>
                            <Button className={colorScheme.close} onClick={handleClose} >CLOSE</Button>
                        </div>
                </Modal>
        );
    
}

const useStyles = makeStyles(theme => ({

    close: {
            backgroundColor: '#40a3ff',
            color: 'white',      
            margin: '0 2%'
        },
    title: {
        fontSize: 35,
        margin: 0,
        color: '#40a3ff',
    },
    subtitles: {
        fontSize: 28,
        margin: 0,
        color: '#40a3ff',
    },
    icon:{
        width: '100px',
        marginTop: '10px',
        marginBottom: '10px',
    },
    data:{
        textTransform: 'capitalize',
        fontSize: 20,
        margin: 0,
        color: theme.palette.grey[500],
        '& b':   {
            color: '#7EC1FF',
        },
    },
    content:{
            display: 'flex',
            alignItems: 'center',
            height: '40%',
            width: '50%',
            backgroundColor: 'white',
    },
    container:{
        margin: '10px 10px',
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    section:{
        margin: '0 5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexBasis: '60%',
        height: '80%',
    },
    side:{
        margin: '0 3%',
        flexBasis: '30%',
        height: '80%',
    }

}));
const darkStyles = makeStyles(theme => ({
    
    close: {
        backgroundColor: '#FFDB3C',
        color: 'black',
        margin: '0 2%'
    },
    title: {
        fontSize: 35,
        margin: 0,
        color: '#FFDB3C',
    },
    subtitles: {
        fontSize: 28,
        margin: 0,
        color: '#FFDB3C',
    },
    icon:{
        width: '100px',
        marginTop: '10px',
        marginBottom: '10px',
    },
    data:{
        textTransform: 'capitalize',
        fontSize: 20,
        margin: 0,
        color: theme.palette.grey[200],
        '& b':   {
            color: '#FFEC9A',
        },
    },
    content:{
            backgroundColor: theme.palette.grey[900],
            display: 'flex',
            alignItems: 'center',
            height: '40%',
            width: '50%',
    },
    container:{
        margin: '10px 10px',
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    section:{
        margin: '0 3%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexBasis: '60%',
        height: '80%',
    },
    side:{
        margin: '0 5%',
        flexBasis: '30%',
        height: '80%',
    }

}));
export default FullReport;