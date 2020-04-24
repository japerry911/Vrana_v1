import React from 'react';
import { useStyles } from './FormImageUploaderStyles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

const FormImageUploader = ({ labelText, onChange, id, emptyField }) => {
    const classes = useStyles();

    const inputElement = document.getElementById(id);
    if (emptyField && inputElement) {
        inputElement.value = '';
    }

    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
            <Typography variant='h6' className={classes.labelStyle}>
                {labelText}
            </Typography>
            <Input 
                type='file'
                onChange={onChange}
                id={id}
            />
        </Grid>
    );
};

export default FormImageUploader;