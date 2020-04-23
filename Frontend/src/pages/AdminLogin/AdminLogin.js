import React, { useState, useEffect } from 'react';
import { useStyles } from './AdminLoginStyles';
import Grid from '@material-ui/core/Grid';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Footer from '../../components/Footer/Footer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { attemptLogin } from '../../redux/actions/adminsAction';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = props => {
    return (
        <MuiAlert elevation={6} variant='filled' {...props} />
    );
};

const AdminLogin = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validationStatus, setValidationStatus] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setValidationStatus(username && password);
    }, [username, password]);

    const handleSubmit = async event => {
        event.preventDefault();
        
        const status = await dispatch(attemptLogin(username, password));
        
        if (!status) {
            setOpen(true);
        } else {
            props.history.push('/');
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;

        setOpen(false);
    };

    return (
        <div>
            <HeroHeader headerText='Admin Portal' />
            <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                <form onSubmit={handleSubmit} className={classes.formContainerStyle}>
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
                                type='password'
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
                </form>
            </Grid>
            <Snackbar open={open} onClose={handleClose}>
                <Alert severity='error' onClose={handleClose}>
                    Invalid Credentials
                </Alert>
            </Snackbar>
            <Footer />
        </div>
    );
};

export default AdminLogin;