import React from 'react';
import './UXHeader.css';

const UXHeader = (props) => {
    return (
        <div className={props.variant && props.variant}>
            {props.text && props.text}
        </div>
    )
}
export default UXHeader;
