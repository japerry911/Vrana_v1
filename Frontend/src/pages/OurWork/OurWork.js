import React from 'react';
import { useStyles } from './OurWorkStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import HorizontalTabs from '../../components/HorizontalTabs/HoritzontalTabs';
import Footer from '../../components/Footer/Footer';
import CommercialTab from '../../misc/TabContent/OurWork/CommercialTab/CommercialTab';

const tabContentArray = [
    {
        tabTitle: 'Commercial',
        tabContent: <CommercialTab />
    }
];

const OurWork = () => {
    const classes = useStyles();

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