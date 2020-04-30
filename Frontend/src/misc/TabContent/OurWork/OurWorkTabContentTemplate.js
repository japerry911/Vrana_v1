import React from 'react';
import { useStyles } from './TemplateStyles';
import Grid from '@material-ui/core/Grid';
import CommonHeader from '../../../components/CommonHeader/CommonHeader';
import Card from '../../../components/Card/Card';

const OurWorkTabContentTemplate = ({ tabContent, industry }) => {
    const classes = useStyles();

    return (
        <div className={classes.whiteContainerStyle}>
            <Grid container spacing={0} justify='center'>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                    <CommonHeader
                        headerText='OUR WORK'
                        subHeaderText={industry}
                        headerTextColor='dark'
                        dividerColor='dark'
                    />
                </Grid>
                {tabContent.map(project => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={project.id} align='center'>
                            <Card 
                                alt={project.Client_Name}
                                imageUrl={project.Card_Image_Url}
                                headerText={project.Client_Name.toString().toUpperCase()}
                                headerAlign='center'
                                linkId={project.id}
                                extension='our-work/projects'
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default OurWorkTabContentTemplate;