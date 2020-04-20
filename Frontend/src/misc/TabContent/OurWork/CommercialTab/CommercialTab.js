import React from 'react';
import { useStyles } from './CommercialStylesTab';
import CommonHeader from '../../../../components/CommonHeader/CommonHeader';
import Card from '../../../../components/Card/Card';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

const CommercialTab = () => {
    const classes = useStyles();

    const commercialProjects = useSelector(state => state.projects.projects.commercial);

    return (
        <div className={classes.whiteContainerStyle}>
            <Grid container spacing={0} justify='center'>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                    <CommonHeader
                        headerText='COMMERCIAL'
                        subHeaderText='OUR WORK'
                        headerTextColor='dark'
                        dividerColor='dark'
                    />
                </Grid>
                {commercialProjects.map((project, index) => {
                    const cardClass = index % 2 === 0 ? classes.gridLeftItemCardStyle : classes.gridRightItemCardStyle;
                    const alignSide = index % 2 === 0 ? 'right' : 'left';

                    return (
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={cardClass} key={project.id} align={alignSide}>
                            <Card
                                alt={project.Client_Name}
                                imageUrl={project.Image_Url}
                                headerText={project.Client_Name.toString().toUpperCase()}
                                headerAlign='center'
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default CommercialTab;