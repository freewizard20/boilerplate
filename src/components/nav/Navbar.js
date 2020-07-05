import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        height: 70
    },
});

export default function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        if (window.location.href.toString().includes("feedback")) {
            setValue(2);
        } else if (window.location.href.toString().includes("input")) {
            setValue(1);
        } else {
            setValue(0);
        }
    }, []);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction component={Link} to="/" label="지수" icon={<RestoreIcon />} />
            <BottomNavigationAction component={Link} to="/input" label="새 시나리오" icon={<FavoriteIcon />} />
            <BottomNavigationAction component={Link} to="feedback" label="사후평가" icon={<LocationOnIcon />} />
        </BottomNavigation>
    );
}