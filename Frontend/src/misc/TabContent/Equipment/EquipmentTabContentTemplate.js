import React from 'react';
import { useStyles } from './TemplateStyles';
import Grid from '@material-ui/core/Grid';
import CommonHeader from '../../../components/CommonHeader/CommonHeader';
import Card from '../../../components/Card/Card';

const NewsTabContentTemplate = ({ tabContent, year }) => {
    const classes = useStyles();

    return (
        <div className={classes.whiteContainerStyle}>
            <Grid container spacing={0} justify='center'>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                    <CommonHeader
                        headerText='EQUIPMENT'
                        subHeaderText={year}
                        headerTextColor='dark'
                        dividerColor='dark'
                    />
                </Grid>
                {tabContent.map(equipment => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={equipment.id} align='center'>
                            <Card 
                                alt={equipment.Name}
                                imageUrl={equipment.Card_Image}
                                headerText={equipment.Name.toString().toUpperCase()}
                                headerAlign='center'
                                linkId={equipment.id}
                                extension='equipment'
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default NewsTabContentTemplate;