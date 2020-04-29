import React, { useEffect, useState, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from './HomeStyles';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import ImageBannerSection from '../../components/ImageBannerSection/ImageBannerSection';
import { useSelector, useDispatch } from 'react-redux';
import { getNewsArticles } from '../../redux/actions/newsActions';
import NewsCard from '../../components/NewsCard/NewsCard';
import Spinner from '../../components/Spinner/Spinner';

const Home = ({ history }) => {
    const classes = useStyles();

    const [twoRecentNewsArticles, setTwoRecentNewsArticles] = useState([]);

    const isLoading = useSelector(state => state.news.isLoading);
    const articles = useSelector(state => state.news.newsArticles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewsArticles());
    }, [dispatch]);

    useEffect(() => {
        if (articles.length > 0) {
            const length = articles.length < 2 ? 1 : 2;
            const tempArray = [];

            for (let i = 0; i < length; i++) {
                tempArray.push(articles[i]);
            }

            setTwoRecentNewsArticles(tempArray);
        }
    }, [articles]);

    return (
        <div className={classes.mainDivStyle}>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <Fragment>
            <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={classes.greetingDiv}>
                    <Typography variant='h2' className={classes.greetingHeaderTextStyle}>
                        BUILDING CONFIDENCE SINCE 1909
                    </Typography>
                    <Typography variant='h4' className={classes.greetingSubtitleTextStyle}>
                        We combine the strength of a large general contractor with the responsiveness
                        and economic advantages of a closely held family business.
                    </Typography>
                    <div className={classes.buttonsDivStyle}>
                        <Button 
                            className={classes.learnMoreButtonStyle}
                            onClick={() => history.push('/about-us')}
                        >
                            LEARN MORE
                        </Button>
                        <Button 
                            className={classes.greyButtonStyle}
                            onClick={() => history.push('/our-work')}
                        >
                            OUR PROJECTS
                        </Button>
                    </div>
                </div>
            </Grid>
            <Grid container spacing={0} className={classes.lightWhiteContainerStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'style={{paddingBottom: '2em'}}>
                    <CommonHeader
                        headerText='WHAT WE OFFER'
                        headerTextColor='dark'
                        subHeaderText='QUALITY CONSTRUCTION'
                        dividerColor='dark'
                        align='center'
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                    <Card
                        headerText='CONSTRUCTION EXCELLENCE'
                        bodyText='We deliver both large and small construction projects including Commercial, Retail, Housing, Religious,
                        Educational, Parking Structures, and Civil.'
                        imageAlt='Finished building'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Commercial+Construction.jpg'
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                    <Card
                        headerText='SKILLED WORKMANSHIP'
                        bodyText='Our experienced team of construction professionals has the skills to deliver high quality projects every time - no matter
                        the size and scope.'
                        imageAlt='Meeting in Gym'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Messages+Image(3370258115).jpg'
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                    <Card
                        headerText='PROJECT MANAGEMENT'
                        bodyText='Our proven and seamless workflow allows us to manage dynamic, time-sensitive construction projects of all sizes on 
                        time and on budget.'
                        imageAlt='Writing on Clipboard'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/pexels-photo-544965.jpg'
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.containerGreyStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                    <CommonHeader
                        headerText='OUR PROJECTS'
                        headerTextColor='light'
                        subHeaderText='PORTFOLIO'
                        dividerColor='light'
                        align='center'
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.ourProjectsContainerStyle}>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <img
                        className={classes.projectsImageStyle}
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(8).png'
                        alt='Omaha Steaks Finished Building'
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <img 
                        className={classes.projectsImageStyle}
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-16+at+12.43.36+PM.jpg'
                        alt="Children's Hospital Finished Building"
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <img 
                        className={classes.projectsImageStyle}
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(11).png'
                        alt="Baker's Finished Building"
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <img
                        className={classes.projectsImageStyle}
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(13).png'
                        alt='Finished Apartment Building'
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.ourProjectsContainerStyle}>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <img
                        className={classes.projectsImageStyle}
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(12).png'
                        alt='Finished Office Building'
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <img 
                        className={classes.projectsImageStyle}
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(5).png'
                        alt='Finished Church'
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <img 
                        className={classes.projectsImageStyle}
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(6).png'
                        alt='Finished Parking Garage'
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <img 
                        className={classes.projectsImageStyle}
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(19).png'
                        alt='Finished Interstate/Highway'
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.greyContainerStyle} alignItems='center'>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Grid container spacing={0} className={classes.ourReasonContainerStyle} direction='column'>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className={classes.ourReasonGridStyle}> 
                            <CommonHeader
                                headerText='WHY CHOOSE US'
                                headerTextColor='dark'
                                subHeaderText='OUR REASON'
                                dividerColor='left-dark'
                                align='left'
                            />
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className={classes.ourReasonGridStyle}> 
                            <div className={classes.ourReasonDiv}>
                                <img
                                    alt='Constructor worker icon'
                                    src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Worker+Icon.png'
                                    className={classes.ourReasonIconsStyle}
                                />
                                <div>
                                <Typography variant='h6' className={classes.ourReasonHeaderStyle}>
                                    OVER 100 YEARS EXPERIENCE
                                </Typography>
                                <Typography variant='body1' className={classes.ourReasonDescStyle}>
                                    We're one of the largest and most successful general construction firms in the midwest. Our qualified team has 
                                    experience in all types of construction.
                                </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className={classes.ourReasonGridStyle}> 
                            <div className={classes.ourReasonDiv}>
                                <img
                                    alt='Wrench icon'
                                    src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Experience+Icon.png'
                                    className={classes.ourReasonIconsStyle}
                                />
                                <div>
                                <Typography variant='h6' className={classes.ourReasonHeaderStyle}>
                                    CONSTRUCTION QUALITY
                                </Typography>
                                <Typography variant='body1' className={classes.ourReasonDescStyle}>
                                    Regardless of the size of the project, our client always enjoy a measure of confidence, both in construction quality 
                                    and economy, unique in our industry.
                                </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className={classes.ourReasonGridStyle}> 
                            <div className={classes.ourReasonDiv}>
                                <img
                                    alt='Pair of Tools icon'
                                    src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Efficiency+Icon.png'
                                    className={classes.ourReasonIconsStyle}
                                />
                                <div>
                                    <Typography variant='h6' className={classes.ourReasonHeaderStyle}>
                                        ECONOMIC & EFFICIENT
                                    </Typography>
                                    <Typography variant='body1' className={classes.ourReasonDescStyle}>
                                        We build confidence by providing skilled workmanship, attentive project management, all at an economical price - you 
                                        won't have to sacrifice quality for budget.
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='center'>
                    <img 
                        alt='Paving crew in action'
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-16+at+12.54.02+PM.jpg'
                        className={classes.ourReasonImagestyle}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.lightWhiteContainerStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                    <CommonHeader
                        headerText='IN THE NEWS'
                        headerTextColor='dark'
                        subHeaderText='NEWS & BLOG'
                        dividerColor='dark'
                    />
                </Grid>
            </Grid>
            <Grid container className={classes.lightWhiteContainerStyle}>
                {twoRecentNewsArticles.map(article => {
                    const gridSize = twoRecentNewsArticles.length < 2 ? 12 : 6;

                    return (
                        <Grid item xs={gridSize} sm={gridSize} lg={gridSize} xl={gridSize} align='center' key={article.id}>
                            <NewsCard 
                                headline={article.Headline}
                                source={article.Source}
                                imageUrl={article.Feature_Image_Url}
                                date={article.Date_Published.toString().substring(0, 10)}
                                linkUrl={article.Article_Link}
                            />
                        </Grid>
                    );
                })}
            </Grid>
            <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                <ImageBannerSection 
                    headerText='EXCEPTIONAL PEOPLE GIVING YOU EXCEPTIONAL RESULTS'
                    bodyText="We offer skilled worksmanship, attentive project management, all at an economical price - which 
                    means you don't have to compromise. Our clients enjoy a measure of confidence, both in construction quality 
                    and economy, unique in our industry."
                    width='60%'
                    buttonText='CONTACT US'
                    flexColumn
                    justify='space-evenly'
                    imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Messages+Image(1327665301).jpg'
                    buttonCta={() => history.push('/contact-us')}
                />
            </Grid>
            <Grid container spacing={0} className={classes.lightWhiteContainerStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.gridBottomPaddingStyle}>
                    <CommonHeader 
                        headerText='WHO WE SERVE'
                        subHeaderText='CLIENTS'
                        dividerColor='dark'
                        headerTextColor='dark'
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                    <img 
                        alt='Ameristar Logo'
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/ameristar-council-bluffs-logo-283x80.png'
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                    <img 
                        alt='Omaha Steaks Logo'
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(9).png'
                        className={classes.omahaSteaksLogoStyle}
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                    <img 
                        alt='Streck Logo'
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Streck-Brandmark-RGB+copy.png'
                        className={classes.streckLogoStyle}
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt="Rotella's Italian Bakery Logo"
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(10).png'
                        className={classes.rotellasLogoStyle}
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt="Omaha Eppley Airfield Logo"
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/OMA_Eppley_Airfield_Logo+copy.png'
                        className={classes.omaLogoStyle}
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt="net Sports Logo"
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/NET_Sports_CMYK_rev+copy+(1).png'
                        className={classes.netSportsLogoStyle}
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt="Omaha North High Magnet School Logo"
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/o_northhs-logo+copy.png'
                        className={classes.omahaNorthSchoolLogoStyle}
                    />
                </Grid>
            </Grid>
            <Footer />
            </Fragment>}
        </div>
    );
};

export default Home;