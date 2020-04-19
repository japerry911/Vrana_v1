import React from 'react';
import { useStyles } from './OurWorkStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import HorizontalTabs from '../../components/HorizontalTabs/HoritzontalTabs';
import Footer from '../../components/Footer/Footer';

const OurWork = () => {
    const classes = useStyles();

    return (
        <div>
            <HeroHeader 
                headerText='Our Work'
            />
            <HorizontalTabs />
            <Footer />
        </div>
    );
};

export default OurWork;