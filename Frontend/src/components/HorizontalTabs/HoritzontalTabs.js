import React, { useState } from 'react';
import { useStyles } from './HorizontalTabsStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel, a11yProps } from './TabPanel';

const HorizontalTabs = ({ tabContentArray }) => {
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
                {tabContentArray.map((tabContentObject, index) => {
                    return (
                        <Tab label={tabContentObject.tabTitle} {...a11yProps(index)} /> 
                    );
                })}
            </Tabs>
            {tabContentArray.map((tabContentObject, index) => {
                return (
                    <TabPanel value={value} index={index}>
                        {tabContentObject.tabContent}
                    </TabPanel>
                );
            })}
        </div>
    );
};

export default HorizontalTabs;
