import React, { useState } from 'react';
import { Avatar as AvatarDiv } from '@mui/material';
import { Badge } from '@mui/material';
import defaultAvatar from './image/avatar.png';
import badgeImg from './image/verified.svg';

export default function Avatar({ url, size, verified }) {

    // const [avatarPic, setAvatar] = useState(url ? url : defaultAvatar.src);
    // const [avatarSize, setSize] = useState(size ? size : { width: 90, height: 90 });
    const [verifiedAvatar, setVerified] = useState(verified? badgeImg.src:'');

    return (
        <Badge
        overlap='circular' 
        anchorOrigin={{vertical:'bottom', horizontal:'right'}}
        badgeContent={<img src={verifiedAvatar}></img>}>
            <AvatarDiv
                src={url}
                alt='Avatar'
                sx={size}>

            </AvatarDiv>
        </Badge>

    );
};

Avatar.defaultProps={
    url: defaultAvatar.src,
    size: {width:90, height:90},
    verified: false
}
