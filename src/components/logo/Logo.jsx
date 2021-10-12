import React from 'react';
import * as defaultLogo from '../assets/images/logo.svg';
import * as mutedLogo from '../assets/images/logo-muted.svg';

const Logo = (prop) => {
    let src = '';

    if (prop.type === 'default' || prop.type === null || prop.type === undefined) {
        src = defaultLogo.default.src;
    } else if(prop.type === 'muted') {
        src = mutedLogo.default.src;
    };

    return (
        <div>
           <img src={src}/>
        </div>
    );
};

export default Logo;