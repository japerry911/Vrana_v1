import React from 'react'
import { useStyles } from './ServicesStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';

const Services = () => {
    const classes = useStyles();

    return (
        <div>
            <HeroHeader headerText='WHAT WE DO' />
        </div>
    );
};

export default Services;