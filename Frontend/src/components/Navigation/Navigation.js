import React, { useState } from 'react';
import MainAppBar from '../MainAppBar/MainAppBar';
import MainDrawer from '../MainDrawer/MainDrawer';

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');

    return (
        <div>
            <MainAppBar handleDrawerOpen={() => setOpen(true)} title={title} />
            <MainDrawer open={open} handleDrawerClose={() => setOpen(false)} handleTitle={(newTitle) => setTitle(newTitle)} />
        </div>
    );
};

export default Navigation;