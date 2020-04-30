import React, { useEffect, Fragment, useState } from 'react';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import HorizontalTabs from '../../components/HorizontalTabs/HoritzontalTabs';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../redux/actions/projectsActions';
import Spinner from '../../components/Spinner/Spinner';
import { useStyles } from './OurWorkStyles';
import OurWorkTabContentTemplate from '../../misc/TabContent/OurWork/OurWorkTabContentTemplate';

const OurWork = () => {
    const classes = useStyles();

    const [tabContentArray, setTabContentArray] = useState([]);

    const isLoading = useSelector(state => state.projects.loading);
    const projects = useSelector(state => state.projects.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    useEffect(() => {
        if (projects.length > 0) {
            const tempArrayOfObjectOfArrays = {};
            for (let i = 0; i < projects.length; i++) {
                if (tempArrayOfObjectOfArrays[projects[i].Industry]) {
                    tempArrayOfObjectOfArrays[projects[i].Industry].push(projects[i]);
                } else {
                    tempArrayOfObjectOfArrays[projects[i].Industry] = [projects[i]];
                }
            }

            const tempTabContentArray = [];

            for (let i = 0; i < Object.keys(tempArrayOfObjectOfArrays).length; i++) {
                const currentIndustryKey = Object.keys(tempArrayOfObjectOfArrays)[i];
                
                tempTabContentArray.push({ tabTitle: currentIndustryKey.toString(), tabContent: <OurWorkTabContentTemplate 
                                                                                                    tabContent={tempArrayOfObjectOfArrays[currentIndustryKey]}
                                                                                                    industry={currentIndustryKey}
                                                                                                /> });
            }

            setTabContentArray(tempTabContentArray);
        }
    }, [projects]);

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
            </Fragment>}
        </div>
    );
};

export default OurWork;