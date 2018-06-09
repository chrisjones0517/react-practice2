import React from 'react';
import './Validation.css';

const validation = (props) => {
    return (
        <div className="validation">
            <p>{props.message}</p>
        </div>
    );
};

export default validation;