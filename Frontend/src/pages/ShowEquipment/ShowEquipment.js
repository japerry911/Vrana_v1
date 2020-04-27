import React, { Fragment, useEffect } from 'react';
import { useStyles } from './ShowEquipmentStyles';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { getSpecificEquipment } from '../../redux/actions/equipmentActions';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Grid from '@material-ui/core/Grid';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import Typography from '@material-ui/core/Typography';
import Footer from '../../components/Footer/Footer';

const ShowEquipment = ({ match }) => {
    const classes = useStyles();

    const id = match.params.id;

    const isLoading = useSelector(state => state.equipment.loading);
    const showEquipment = useSelector(state => state.equipment.showEquipment);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificEquipment(id));
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
                <HeroHeader headerText='Equipment' />
                <Grid container spacing={0} className={classes.whiteContainerStyle} item xs={12} sm={12} md={12} lg={12} xl={12} justify='center'>
                    <CommonHeader
                        headerText={showEquipment.Name !== undefined ? showEquipment.Name.toString().toUpperCase() : null}
                        headerTextColor='dark'
                        dividerColor='dark'
                        align='center'
                    />
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='h6' className={classes.vranaRedHeaderTextStyle}>
                            EQUIPMENT DETAILS
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='body1' className={classes.boldSpacingStyle}>
                            Name: <span className={classes.avenirRegStyle}>{showEquipment.Name}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='body1' className={classes.boldSpacingStyle}>
                            Year: <span className={classes.avenirRegStyle}>{showEquipment.Year}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='body1' className={classes.boldSpacingStyle}>
                            Price: <span className={classes.avenirRegStyle}>${showEquipment.Price}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='body1' className={classes.boldSpacingStyle} paragraph>
                            Description: <span className={classes.avenirRegStyle}>{showEquipment.Description}</span>
                        </Typography>
                    </Grid>
                    {showEquipment.Image_Left && showEquipment.Image_Right 
                    ?
                    <Fragment>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='center'>
                            <img
                                alt={`${showEquipment.Name}`}
                                src={showEquipment.Image_Left}
                                className={classes.imageStyle}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='center'>
                            <img
                                alt={`${showEquipment.Name}`}
                                src={showEquipment.Image_Right}
                                className={classes.imageStyle}
                            />
                        </Grid>
                    </Fragment>
                    :
                    <Fragment>
                    {showEquipment.Image_Left 
                    ?
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                            <img
                                alt={`${showEquipment.Name}`}
                                src={showEquipment.Image_Left}
                                className={classes.imageStyle}
                            />
                        </Grid>
                    :
                    null}
                    </Fragment>}
                </Grid>
                <Footer />
            </Fragment>}
        </div>
    );
};

export default ShowEquipment;