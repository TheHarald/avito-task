import React from 'react';
import './button.css';

type ButtonProps = {
    name: string;
    onClick: () => void;
}

function Button(props: ButtonProps) {
    return (
        <button className='button' onClick={props.onClick}>{props.name}</button>
    );
}

export default Button;