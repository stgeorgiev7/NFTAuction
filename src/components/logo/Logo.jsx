import React from 'react';

const Logo = (prop) => {
    let src = './images/logo.svg';

    if (prop.type === 'muted') {
        src = './images/logo-muted.svg';
    };
    
    return (
           <img src={src}/>
    );
};

export default Logo;