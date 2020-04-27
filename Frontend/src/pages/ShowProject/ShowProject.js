import React, { useEffect, Fragment } from 'react';
import { useStyles } from './ShowProjectStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getProject } from '../../redux/actions/projectsActions';
import Spinner from '../../components/Spinner/Spinner';
import Footer from '../../components/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import ImageBannerSection from '../../components/ImageBannerSection/ImageBannerSection';
import Typography from '@material-ui/core/Typography';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import CommonHeader from '../../components/CommonHeader/CommonHeader';

const ShowProject = ({ match }) => {
    const classes = useStyles();
    
    const id = match.params.id;

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.projects.loading);
    const showProject = useSelector(state => state.projects.showProject);
    
    useEffect(() => {
        dispatch(getProject(id));
    }, [dispatch, id]); 

    return (
        <div className={classes.mainDivStyle}>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader 
                    headerText='Our Work'
                />
                <Grid container spacing={0} className={classes.whiteContainerStyle} item xs={12} sm={12} md={12} lg={12} xl={12} justify='center'>
                    <CommonHeader
                        headerText={showProject.Client_Name !== undefined ? showProject.Client_Name.toString().toUpperCase() : null}
                        headerTextColor='dark'
                        dividerColor='dark'
                        align='center'
                    />
                </Grid>
                <ImageBannerSection
                    imageUrl={showProject.Template_Image1_Url}
                    noOpacity
                />
                <Grid container className={classes.whiteContainerStyle}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='h3' className={classes.vranaRedHeaderTextStyle}>
                            PROJECT SNAPSHOT
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='body1' className={classes.boldSpacingStyle}>
                            Client Name: <span className={classes.avenirRegStyle}>{showProject.Client_Name}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='body1' className={classes.boldSpacingStyle}>
                            Size: <span className={classes.avenirRegStyle}>{showProject.Size}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='body1' className={classes.boldSpacingStyle}>
                            Location: <span className={classes.avenirRegStyle}>{showProject.Location}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='body1' className={classes.boldSpacingStyle}>
                            Year Completed / Project Status: <span className={classes.avenirRegStyle}>{showProject.YearCompleted_ProjectStatus}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='body1' className={classes.boldSpacingStyle}>
                            Construction Value: <span className={classes.avenirRegStyle}>{showProject.Construction_Value}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='body1' className={classes.boldSpacingStyle}>
                            Scope of Work: <span className={classes.avenirRegStyle}>{showProject.Scope_Of_Work}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='body1' className={classes.boldSpacingStyle}>
                            Industry: <span className={classes.avenirRegStyle}>{showProject.Industry}</span>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container className={classes.whiteContainerStyle}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='h3' className={classes.vranaRedHeaderTextStyle}>
                            {showProject.First_P_Header}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography varaint='body1' className={classes.avenirRegStyle} paragraph>
                            {showProject.First_P_Content}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container className={classes.whiteContainerStyle}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='h3' className={classes.vranaRedHeaderTextStyle}>
                            KEY PROJECT DETAILS
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <ul>
                            {showProject.Key_Projects_Bullets === undefined 
                            ?
                            null
                            :
                            showProject.Key_Projects_Bullets.split('|||').map((bullet, index) => {
                                return (
                                    <li key={index}>
                                        <Typography varaint='body1' className={classes.avenirRegStyle} paragraph>
                                            {bullet}
                                        </Typography>
                                    </li>
                                );
                            })}
                        </ul>
                    </Grid>
                </Grid>
                <ImageBannerSection
                    imageUrl={showProject.Template_Image2_Url}
                    noOpacity
                />
                <Footer />
            </Fragment>}
        </div>
    );
};

export default ShowProject;