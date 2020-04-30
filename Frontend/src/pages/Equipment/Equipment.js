import React, { Fragment, useEffect, useState } from 'react';
import { useStyles } from './EquipmentStyles.js';
import { useSelector, useDispatch } from 'react-redux';
import { getEquipment } from '../../redux/actions/equipmentActions';
import Spinner from '../../components/Spinner/Spinner';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import HorizontalTabs from '../../components/HorizontalTabs/HoritzontalTabs';
import EquipmentTabContentTabTemplate from '../../misc/TabContent/Equipment/EquipmentTabContentTemplate';

const Shop = () => {
    const classes = useStyles();

    const [tabContentArray, setTabContentArray] = useState([]);

    const isLoading = useSelector(state => state.equipment.loading);
    const equipment = useSelector(state => state.equipment.equipment);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEquipment());
    }, [dispatch]);

    useEffect(() => {
        if (equipment.length > 0) {
            const tempArrayOfObjectOfArrays = {};
            for (let i = 0; i < equipment.length; i++) {
                if (tempArrayOfObjectOfArrays[equipment[i].Year]) {
                    tempArrayOfObjectOfArrays[equipment[i].Year].push(equipment[i]);
                } else {
                    tempArrayOfObjectOfArrays[equipment[i].Year] = [equipment[i]];
                }
            }

            const tempTabContentArray = [];

            for (let i = 0; i < Object.keys(tempArrayOfObjectOfArrays).length; i++) {
                const currentYearKey = Object.keys(tempArrayOfObjectOfArrays)[i];

                tempTabContentArray.push({ tabTitle: currentYearKey.toString(), tabContent: <EquipmentTabContentTabTemplate 
                                                                                                tabContent={tempArrayOfObjectOfArrays[currentYearKey]}
                                                                                                year={currentYearKey}
                                                                                            /> });
            }

            setTabContentArray(tempTabContentArray);
        }
    }, [equipment]);

    return (
        <div className={classes.mainDivStyle}>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader headerText='Equipment' />
                <HorizontalTabs tabContentArray={tabContentArray} />
            </Fragment>}
        </div>
    );
};

export default Shop;