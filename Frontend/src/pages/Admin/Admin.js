import React, { useState, useEffect } from 'react';
import { useStyles } from './AdminStyles';
import Grid from '@material-ui/core/Grid';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Footer from '../../components/Footer/Footer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { attemptLogin } from '../../redux/actions/adminsAction';

const Admin = (props) => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validationStatus, setValidationStatus] = useState(false);
    const authedStatus = useSelector(state => state.admins.authed);
    const dispatch = useDispatch();

    useEffect(() => {
        setValidationStatus(username && password);
    }, [username, password]);

    useEffect(() => {
        if (authedStatus) {
            props.history.push('/');
        } else if (!authedStatus && username && password) {
            console.log('failed!');
        } 
    }, [authedStatus, props.history]);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(attemptLogin(username, password));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <HeroHeader />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center'>
                    <Grid container spacing={0} className={classes.whiteContainerStyle}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                            <Typography variant='h4' className={classes.headerFontStyle}>
                                Sign In
                            </Typography>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                            <TextField 
                                label='Username' 
                                className={classes.textFieldStyle} 
                                value={username}
                                onChange={newUsername => setUsername(newUsername.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                            <TextField 
                                label='Password' 
                                className={classes.textFieldStyle} 
                                value={password}
                                onChange={newPassword => setPassword(newPassword.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                            <Button 
                                className={classes.buttonStyle} 
                                disabled={!validationStatus} 
                                type='submit'
                            >
                                <Typography variant='h6' className={classes.buttonTextStyle}>
                                    Sign In
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
            <Footer />
        </div>
    );
};

export default Admin;