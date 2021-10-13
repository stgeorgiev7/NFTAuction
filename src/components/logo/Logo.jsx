import React from 'react';

const Logo = (type) => {
    let src = '';

    if (type.mode === 'default' || type.mode === null || type.mode === undefined) {
        src = './images/logo.svg';
    } else if(type.mode === 'muted') {
        src = './images/logo-muted.svg';
    };

    return (
           <img src={src}/>
    );
};

export default Logo;