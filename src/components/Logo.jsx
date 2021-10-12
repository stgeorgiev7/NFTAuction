import React from 'react';

const Logo = (props) => {
    let image = '';

    if (props.type === 'default' || props.type === null) {
        image = '/assets/images/logo.svg';
    } else if(props.type === 'muted') {
        image = '/assets/images/logo-muted.svg';
    };

    return (
        <div>
           <image></image>
        </div>
    );
};

export default Logo;