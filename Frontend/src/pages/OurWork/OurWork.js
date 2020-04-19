import React from 'react';
import { useStyles } from './OurWorkStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import VerticalTabs from '../../components/VerticalTabs/VerticalTabs';
import Commercial from '../../misc/TabContent/OurWork/Commercial/Commercial';
import Footer from '../../components/Footer/Footer';

const OurWork = () => {
    const classes = useStyles();

    return (
        <div>
            <HeroHeader 
                headerText='Our Work'
            />
            <VerticalTabs />
            <Footer />
        </div>
    );
};

export default OurWork;