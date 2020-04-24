import React from 'react';
import { useStyles } from './FormTextFieldStyles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const FormTextField = ({ label, value, onChange, paddingTop }) => {
    const classes = useStyles({ paddingTop });

    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
            <TextField 
                label={label}
                value={value}
                onChange={onChange}
                className={classes.textFieldStyle} 
            />
        </Grid>
    );
};

export default FormTextField;