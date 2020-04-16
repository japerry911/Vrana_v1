import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    }
}));

const MainDrawer = ({ open, handleDrawerClose }) => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            anchor='left'
            open={open}
            classes={{
                paper: classes.drawerPaper
            }}
            variant='temporary'
            onClose={handleDrawerClose}
        >
            <div className={classes.drawerHeader}>
                <List>
                    <ListItem button key={'TEST-ITEM'}>
                        <ListItemText primary={'TEST-ITEM-TEXT'} />
                    </ListItem>
                </List>
                <Divider />
                <IconButton
                    onClick={handleDrawerClose}
                >
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </Drawer>
    );
};

export default MainDrawer;