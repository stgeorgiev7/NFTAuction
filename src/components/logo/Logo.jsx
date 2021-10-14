import React from 'react';

const logo = ({ type }) => {
    
    let src = './images/logo.svg';
    
    if (type === 'muted') {
        src = './images/logo-muted.svg';
    };
    
    return (
        <img src={src}/>
    );
}

export default logo;