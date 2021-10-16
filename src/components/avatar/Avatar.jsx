import React, {useState} from 'react';
import { Avatar as AvatarDiv } from '@mui/material';

export default function Avatar({url, size, verified}) {
    
    const [image, setImage] = useState('./image/avatar.png');

    console.log(url);
    console.log(size);
    console.log(verified);

    
    return(
        <AvatarDiv alt='./image/avatar.png' src={image} >S</AvatarDiv>
    );
};