import React from 'react';

const Logo = (prop) => {
    let src = '';

    if (prop.type === 'default' || prop.type === null || prop.type === undefined) {
        src = './images/logo.svg';
    } else if(prop.type === 'muted') {
        src = './images/logo-muted.svg';
    };

    return (
           <img src={src}/>
    );
};

export default Logo;