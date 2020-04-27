import React, { useState, useEffect } from 'react';
import { useStyles } from './AdminLoginStyles';
import Grid from '@material-ui/core/Grid';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Footer from '../../components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { attemptLogin } from '../../redux/actions/adminsActions';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import FormButton from '../../components/FormButton/FormButton';
import FormTextField from '../../components/FormTextField/FormTextField';
import FormHeader from '../../components/FormHeader/FormHeader';

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
                        <FormHeader headerText='Sign In' />
                        <FormTextField
                            label='Username'
                            value={username}
                            onChange={newUsername => setUsername(newUsername.target.value)}
                        />
                        <FormTextField
                            label='Password'
                            value={password}
                            onChange={newPassword => setPassword(newPassword.target.value)}
                            type='password'
                        />
                        <FormButton 
                            buttonText='Sign In'
                            validationStatus={validationStatus}
                        />
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