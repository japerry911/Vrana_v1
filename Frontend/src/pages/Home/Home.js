import React from 'react';
import './Home.css';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.colors.vranaRed,
        fontFamily: theme.fonts.avenirItalicize
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div style={{backgroundColor: 'black'}}>
            <Typography variant='h1' className={classes.root}>Home</Typography>
        </div>
    );
};

export default Home;