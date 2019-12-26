import React from 'react';
import './Clock.css';

const clock = (props) => (

    <div className="Clock w3-container">
        <p className="Time">{props.today.toLocaleTimeString()}</p>
        {props.toggleDate && <p className="Date">{props.today.toLocaleDateString()}</p>}
    </div>

);

export default clock;