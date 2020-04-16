import React, { useState } from 'react';
import MainAppBar from '../MainAppBar/MainAppBar';
import MainDrawer from '../MainDrawer/MainDrawer';

const Navigation = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <MainAppBar handleDrawerOpen={() => setOpen(true)} />
            <MainDrawer open={open} handleDrawerClose={() => setOpen(false)} />
        </div>
    );
};

export default Navigation;