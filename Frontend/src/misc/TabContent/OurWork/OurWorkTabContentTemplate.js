import React from 'react';
import { useStyles } from './TemplateStyles';
import Grid from '@material-ui/core/Grid';
import CommonHeader from '../../../components/CommonHeader/CommonHeader';
import Card from '../../../components/Card/Card';

const OurWorkTabContentTemplate = ({ tabContent, industry }) => {
    const classes = useStyles();

    const isEven = tabContent.length % 2 === 0;

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
                {isEven
                ?
                tabContent.map((project, index) => {
                    const cardClass = index % 2 === 0 ? classes.gridLeftItemCardStyle : classes.gridRightItemCardStyle;
                    const alignSide = index % 2 === 0 ? 'right' : 'left';

                    return (
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={cardClass} key={project.id} align={alignSide}>
                            <Card 
                                alt={project.Client_Name}
                                imageUrl={project.Card_Image_Url}
                                headerText={project.Client_Name.toString().toUpperCase()}
                                headerAlign='center'
                                linkId={project.id}
                            />
                        </Grid>
                    );
                })
                :
                tabContent.map((project, index) => {
                    const cardClass = index % 2 === 0 ? classes.gridLeftItemCardStyle : classes.gridRightItemCardStyle;
                    const alignSide = index % 2 === 0 ? 'right' : 'left';
                    
                    if (index === tabContent.length - 1) {
                        return (
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.gridCenterCardStyle} key={project.id} align='center'>
                                <Card 
                                    alt={project.Client_Name}
                                    imageUrl={project.Card_Image_Url}
                                    headerText={project.Client_Name.toString().toUpperCase()}
                                    headerAlign='center'
                                    linkId={project.id}
                                />
                            </Grid>
                        );
                    } else {
                        return (
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={cardClass} key={project.id} align={alignSide}>
                                <Card 
                                    alt={project.Client_Name}
                                    imageUrl={project.Card_Image_Url}
                                    headerText={project.Client_Name.toString().toUpperCase()}
                                    headerAlign='center'
                                    linkId={project.id}
                                />
                            </Grid>
                        );
                    }
                })}
            </Grid>
        </div>
    );
};

export default OurWorkTabContentTemplate;