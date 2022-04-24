import React from 'react';
import './UXButton.css';

const UXButton = (props) => {
  return (
    <button className={props.variant && props.variant} onClick={() => props.onTap('calling from child..')}>
        {props.text && props.text}
    </button>
  )
}

export default UXButton