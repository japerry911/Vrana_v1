import React, { useEffect } from 'react';
import { useStyles } from './ShowProjectStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getProject } from '../../redux/actions/projectsActions';
import Spinner from '../../components/Spinner/Spinner';
import Footer from '../../components/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import ImageBannerSection from '../../components/ImageBannerSection/ImageBannerSection';
import Typography from '@material-ui/core/Typography';
import HeroHeader from '../../components/HeroHeader/HeroHeader';

const ShowProject = ({ match }) => {
    const classes = useStyles();
    const id = match.params.id;
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.projects.loading);
    const showProject = useSelector(state => state.projects.showProject);
    
    useEffect(() => {
        dispatch(getProject(id));
    }, [dispatch]); 
    console.log(showProject);
    return (
        <>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <div>
                <HeroHeader 
                    headerText='Our Work'
                />
                <Grid container spacing={0} className={classes.whiteContainerStyle} item xs={12} sm={12} md={12} lg={12} xl={12} justify='center'>
                    <Typography variant='h3' className={classes.darkGreyHeaderTextStyle}>
                        {showProject.Client_Name !== undefined ? showProject.Client_Name.toString().toUpperCase() : null}
                    </Typography>
                </Grid>
                <ImageBannerSection
                    imageUrl={showProject.Template_Image1_Url}
                />
                <Footer />
            </div>}
        </>
    );
};

export default ShowProject;