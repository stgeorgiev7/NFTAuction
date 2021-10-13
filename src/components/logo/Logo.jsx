import React from 'react';

const Logo = (prop) => {
    let src = '';

    if (prop.type === 'muted') {
        src = './images/logo-muted.svg';
    } else {
        src = './images/logo.svg';
    };

    return (
           <img src={src}/>
    );
};

export default Logo;