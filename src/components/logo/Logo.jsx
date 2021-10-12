import React from 'react';
import * as defaultLogo from './images/logo.svg';
import * as mutedLogo from './images/logo-muted.svg';

const Logo = (prop) => {
    let src = '';

    if (prop.type === 'default' || prop.type === null || prop.type === undefined) {
        src = defaultLogo.default.src;
    } else if(prop.type === 'muted') {
        src = mutedLogo.default.src;
    };

    return (
           <img src={src}/>
    );
};

export default Logo;