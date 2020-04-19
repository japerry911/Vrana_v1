import React, { useState } from 'react';
import { useStyles } from './VerticalTabsStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel, a11yProps } from './TabPanel';
import Commercial from '../../misc/TabContent/OurWork/Commercial/Commercial';

const VerticalTabs = () => {
    const classes = useStyles();
    const[value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation='vertical'
                variant='scrollable'
                value={value}
                onChange={handleChange}
                aria-label='Our Work Vertical Tabs'
                className={classes.tabs}
            >
                <Tab label='Item One' {...a11yProps(0)} />
                <Tab label='Item Two' {...a11yProps(1)} />
                <Tab label='Item Three' {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0} style={{width: '100%'}}>
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
}

export default VerticalTabs;