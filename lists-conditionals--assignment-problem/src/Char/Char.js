import React from 'react';
import './Char.css';

const char = (props) => {
    return (
        <li onClick={props.click}>
            <div className="char">
                <p>{props.input}</p>
            </div>
        </li>
    );
};

export default char;