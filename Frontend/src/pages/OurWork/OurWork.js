import React, { useEffect } from 'react';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import HorizontalTabs from '../../components/HorizontalTabs/HoritzontalTabs';
import Footer from '../../components/Footer/Footer';
import CommercialTab from '../../misc/TabContent/OurWork/CommercialTab/CommercialTab';
import RetailTab from '../../misc/TabContent/OurWork/RetailTab/RetailTab';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../redux/actions/projectsActions';

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
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects.projects);

    useEffect(() => {
        dispatch(getProjects());
        console.log('here');
    }, [dispatch]);

    console.log(projects)
    return (
        <div>
            <HeroHeader 
                headerText='Our Work'
            />
            <HorizontalTabs tabContentArray={tabContentArray} />
            <Footer />
        </div>
    );
};

export default OurWork;