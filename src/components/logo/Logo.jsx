import React from 'react';
import * as defaultLogo from '../assets/images/logo.svg';
import * as mutedLogo from '../assets/images/logo-muted.svg';

const Logo = (props) => {
    let src = '';

    if (props.type === 'default' || props.type === null || props.type === undefined) {
        src = defaultLogo.default.src;
    } else if(props.type === 'muted') {
        src = mutedLogo.default.src;
    };

    return (
        <div>
           <img src={src}/>
        </div>
    );
};

export default Logo;