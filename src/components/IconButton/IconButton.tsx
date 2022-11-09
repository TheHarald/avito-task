import React from 'react';
import './iconbutton.css'
type IconButtonProps = {
    icon: React.ReactNode
    onClick: () => void
    className?: string
}

function IconButton(props: IconButtonProps) {
    return (
        <span onClick={props.onClick} className={`icon__container ${props.className}`}>
            {props.icon}
        </span>
    );
}

export default IconButton;