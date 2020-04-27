import React from 'react';
import { useStyles } from './TemplateStyles';
import Grid from '@material-ui/core/Grid';
import CommonHeader from '../../../components/CommonHeader/CommonHeader';
import Card from '../../../components/Card/Card';

const NewsTabContentTemplate = ({ tabContent, year }) => {
    const classes = useStyles();

    const isEven = tabContent.length % 2 === 0;

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
                {isEven
                ?
                tabContent.map((equipment, index) => {
                    const cardClass = index % 2 === 0 ? classes.gridLeftItemCardStyle : classes.gridRightItemCardStyle;
                    const alignSide = index % 2 === 0 ? 'right' : 'left';

                    return (
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={cardClass} key={equipment.id} align={alignSide}>
                            <Card 
                                alt={equipment.Name}
                                imageUrl={equipment.Image_Url}
                                headerText={equipment.Name.toString().toUpperCase()}
                                headerAlign='center'
                                linkId={equipment.id}
                            />
                        </Grid>
                    );
                })
                :
                tabContent.map((equipment, index) => {
                    const cardClass = index % 2 === 0 ? classes.gridLeftItemCardStyle : classes.gridRightItemCardStyle;
                    const alignSide = index % 2 === 0 ? 'right' : 'left';
                    
                    if (index === tabContent.length - 1) {
                        return (
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.gridCenterCardStyle} key={equipment.id} align='center'>
                                <Card 
                                    alt={equipment.Name}
                                    imageUrl={equipment.Image_Url}
                                    headerText={equipment.Name.toString().toUpperCase()}
                                    headerAlign='center'
                                    linkId={equipment.id}
                                />
                            </Grid>
                        );
                    } else {
                        return (
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={cardClass} key={equipment.id} align={alignSide}>
                                <Card 
                                    alt={equipment.Name}
                                    imageUrl={equipment.Image_Url}
                                    headerText={equipment.Name.toString().toUpperCase()}
                                    headerAlign='center'
                                    linkId={equipment.id}
                                />
                            </Grid>
                        );
                    }
                })}
            </Grid>
        </div>
    );
};

export default NewsTabContentTemplate;