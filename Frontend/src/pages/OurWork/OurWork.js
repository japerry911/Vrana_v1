import React from 'react';
import { useStyles } from './OurWorkStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';

const OurWork = () => {
    const classes = useStyles;

    return (
        <div>
            <HeroHeader 
                headerText='Our Work'
            />
        </div>
    );
};

export default OurWork;