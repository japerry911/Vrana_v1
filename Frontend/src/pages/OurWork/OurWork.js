import React from 'react';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import HorizontalTabs from '../../components/HorizontalTabs/HoritzontalTabs';
import Footer from '../../components/Footer/Footer';
import CommercialTab from '../../misc/TabContent/OurWork/CommercialTab/CommercialTab';
import RetailTab from '../../misc/TabContent/OurWork/RetailTab/RetailTab';

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