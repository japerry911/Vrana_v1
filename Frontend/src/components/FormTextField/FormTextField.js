import React from 'react';
import { useStyles } from './FormTextFieldStyles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const FormTextField = props => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
            <TextField 
                {...props}
                className={classes.textFieldStyle} 
            />
        </Grid>
    );
};

export default FormTextField;