import React, { Fragment } from 'react';
import { useStyles } from './FormButtonStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const FormButton = ({ buttonText, validationStatus }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                <Button 
                    className={classes.buttonStyle} 
                    type='submit'
                    disabled={!validationStatus}
                >
                    <Typography variant='h6' className={classes.buttonTextStyle}>
                        {buttonText}
                    </Typography>
                </Button>
            </Grid>
        </Fragment>
    );
};

export default FormButton;