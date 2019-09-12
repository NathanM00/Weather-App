import React from 'react';
import { Button } from '@material-ui/core';

function Home(props) {

    function handleClick() {
        props.history.push('/week');
    }

    return <div>
        <h1>The weather very aragan</h1>
        <Button onClick={handleClick} variant="contained" color="primary">Get Weather Info</Button>

    </div>
}

export default Home;