import React from 'react';
import { useStyles } from './OurWorkStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import VerticalTabs from '../../components/VerticalTabs/VerticalTabs';

const OurWork = () => {
    const classes = useStyles;

    return (
        <div>
            <HeroHeader 
                headerText='Our Work'
            />
            <VerticalTabs />
        </div>
    );
};

export default OurWork;