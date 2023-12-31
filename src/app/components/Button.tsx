import React from 'react';

interface ButtonProps{
    text: string;
    color: string;
}
function Button(props:ButtonProps) {
    const {text, color} = props;
    return (
        <div className={`bg-${color} text-white text-sm self-start px-6 py-3 rounded-md`}>{text}</div>
    );
}

export default Button;