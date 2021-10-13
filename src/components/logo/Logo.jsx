import React from 'react';


const Logo = (type) => {
    let src = './images/logo.svg';

    if (type.type === 'muted') {
        src = './images/logo-muted.svg';
    } else {
        src = './images/logo.svg';
    };

    return (
           <img src={src}/>
    );
};

export default Logo;