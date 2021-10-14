import React from 'react';
import styles from "./Header.module.scss";
import Logo from '../logo/Logo';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

// const WhiteButton = styled(Button)({
//     color: 'white'
// });

export default function Header() {
    return(
        <header>
            <Logo />
            <SearchIcon />
            <InputBase placeholder={'Find items, users and activities'}/>
            <Button>Home</Button>
            <Button>Activity</Button>
            <Button variant='contained'>Explore</Button>
        </header>
    )
};