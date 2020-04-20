import React, { useState } from 'react';
import { useStyles } from './HorizontalTabsStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Commercial from '../../misc/TabContent/OurWork/Commercial/Commercial';
import { TabPanel, a11yProps } from './TabPanel';

const HorizontalTabs = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor='primary'
                textColor='primary'
                centered
            >
                <Tab label='Commerical' {...a11yProps(0)} /> 
                <Tab label='Item Two' {...a11yProps(1)} />
                <Tab label='Item Three' {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Commercial />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>
    );
};

export default HorizontalTabs;
