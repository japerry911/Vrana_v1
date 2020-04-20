import React, { useEffect } from 'react';
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
    const projects = useSelector(state => state.projects.projects);
    const isLoading = useSelector(state => state.projects.loading);

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    return (
        <>
            {isLoading ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <div>
                <HeroHeader 
                    headerText='Our Work'
                />
                <HorizontalTabs tabContentArray={tabContentArray} />
                <Footer />
            </div>}
        </>
    );
};

export default OurWork;