import React from 'react';
import styles from "./Header.module.scss";
import classNames from "classnames";
import Logo from '../logo/Logo';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Grid } from '@mui/material';

// const WhiteButton = styled(Button)({
//     color: 'white'
// });

export default function Head() {
    return (
        <Grid container spacing={5} className={classNames(styles.gridContainer)}>
            <Grid item xs={12}  md={4}>
                <Logo />
            </Grid>
            <Grid item xs={12} md={4}>
                <SearchIcon />
                <InputBase placeholder={'Find items, users and activities'} />
            </Grid>
            <Grid item xs={12} md={4}>
                <Button className={classNames(styles.whiteButton)}>Home</Button>
                <Button className={classNames(styles.whiteButton)}>Activity</Button>
                <Button variant='contained'>Explore</Button>
            </Grid>
        </Grid>
    )
};