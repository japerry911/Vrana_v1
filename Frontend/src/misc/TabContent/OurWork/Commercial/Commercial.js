import React from 'react';
import { useStyles } from './CommercialStyles';
import CommonHeader from '../../../../components/CommonHeader/CommonHeader';
import Card from '../../../../components/Card/Card';
import Grid from '@material-ui/core/Grid';

const Commercial = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.whiteContainerStyle}>
            <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12} align='center' justify='center'>
                <CommonHeader
                    headerText='COMMERCIAL'
                    subHeaderText='OUR WORK'
                    headerTextColor='dark'
                    dividerColor='dark'
                />
            </Grid>
        </div>
    );
};

export default Commercial;