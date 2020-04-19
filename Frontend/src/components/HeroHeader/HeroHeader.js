import React from 'react';
import { useStyles } from './HeroHeaderStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const HeroHeader = ({ headerText }) => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={classes.headerDiv}>
                    <Typography variant='h3' className={classes.headerTextStyle}>
                        {headerText}
                    </Typography>
                </div>
            </Grid>
        </div>
    );
};

export default HeroHeader;