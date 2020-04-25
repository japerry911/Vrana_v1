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
            <div className={classes.divAppBarStyle}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor='primary'
                    textColor='primary'
                    scrollButtons='auto'
                    variant='scrollable'
                >
                    {tabContentArray.map((tabContentObject, index) => {
                        return (
                            <Tab label={<span className={classes.label}>{tabContentObject.tabTitle}</span>} {...a11yProps(index)} key={index} /> 
                        );
                    })}
                </Tabs>
            </div>
            {tabContentArray.map((tabContentObject, index) => {
                return (
                    <TabPanel value={value} index={index} key={index}>
                        {tabContentObject.tabContent}
                    </TabPanel>
                );
            })}
        </div>
    );
};

export default HorizontalTabs;
