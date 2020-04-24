import React, { Fragment } from 'react';
import { useStyles } from './FormHeaderStyles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const FormHeader = ({ headerText, variant }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                <Typography 
                    variant={variant ? variant : 'h4'} 
                    className={classes.headerFontStyle}
                >
                    {headerText}
                </Typography>
                <Divider />
            </Grid>
        </Fragment>
    );
};

export default FormHeader;