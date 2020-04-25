import React, { useEffect, Fragment } from 'react';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import HorizontalTabs from '../../components/HorizontalTabs/HoritzontalTabs';
import Footer from '../../components/Footer/Footer';
import CommercialTab from '../../misc/TabContent/OurWork/CommercialTab/CommercialTab';
import RetailTab from '../../misc/TabContent/OurWork/RetailTab/RetailTab';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../redux/actions/projectsActions';
import Spinner from '../../components/Spinner/Spinner';
import { useStyles } from './OurWorkStyles';

const tabContentArray = [
    {
        tabTitle: 'Commercial',
        tabContent: <CommercialTab />
    },
    {
        tabTitle: 'Retail',
        tabContent: <RetailTab />
    }
];

const OurWork = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.projects.loading);

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    return (
        <div className={classes.mainDivStyle}>
            {isLoading ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader 
                    headerText='Our Work'
                />
                <HorizontalTabs tabContentArray={tabContentArray} />
                <Footer />
            </Fragment>}
        </div>
    );
};

export default OurWork;