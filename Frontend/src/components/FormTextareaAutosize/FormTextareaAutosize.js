import React from 'react';
import { useStyles } from './FormTextareaAutosizeStyles';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';

const FormTextareaAutosize = ({ labelText, value, onChange }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
            <Typography variant='h6' className={classes.fieldLabelStyle}>
                {labelText}
            </Typography>
            <TextareaAutosize 
                className={classes.formTextFieldStyle} 
                rowsMin={3}
                onChange={onChange}
                value={value}
            />
        </Grid>
    );
};

export default FormTextareaAutosize;