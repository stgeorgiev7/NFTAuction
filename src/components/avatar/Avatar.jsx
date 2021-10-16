import React, { useState } from 'react';
import { Avatar as AvatarDiv } from '@mui/material';
import { Badge } from '@mui/material';
import styles from "./Avatar.module.scss";
import classNames from 'classnames';
import defaultAvatar from './image/avatar.png';
import badgeImg from './image/verified.svg';



export default function Avatar({ url, size = { width: 90, height: 90 }, verified = false }) {

    const [avatarPic, setAvatar] = useState(url ? url : defaultAvatar.src);
    // const [avatarSize, setSize] = useState(size ? size : { width: 90, height: 90 });
    const [verifiedAvatar, setVerified] = useState(verified ? <img src={badgeImg.src} className='badge'></img> : '');

    return (
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={verifiedAvatar}>
            <AvatarDiv
                src={avatarPic}
                alt='Avatar'
                sx={size}
                className={classNames(styles.avatar)}
            >
            </AvatarDiv>

        </Badge>

    );
};
