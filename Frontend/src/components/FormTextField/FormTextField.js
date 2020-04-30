import React from 'react';
import { useStyles } from './FormTextFieldStyles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const FormTextField = ({ label, value, onChange, paddingTop, id, type='text', inputLabelProps={}, width, gridLength }) => {
    const classes = useStyles({ paddingTop, width });

    if (!gridLength) {
        gridLength = 12;
    }

    return (
        <Grid item xs={gridLength * 2} sm={gridLength * 2} md={gridLength} lg={gridLength} xl={gridLength} className={classes.gridItemStyle} align='center'>
            <TextField 
                label={label}
                value={value}
                onChange={onChange}
                className={classes.textFieldStyle} 
                id={id}
                type={type}
                InputLabelProps={inputLabelProps}
            />
        </Grid>
    );
};

export default FormTextField;