import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { ROUTES_OBJECT } from '../../misc/routesObject';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    drawerStyle: {
        width: '15em',
        flexShrink: 0
    },
    drawerPaperStyle: {
        width: '15em',
        backgroundColor: theme.colors.nonTextGrey,
        color: theme.colors.textWhite
    },
    drawerHeaderStyle: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    backButtonStyle: {
        padding: 5,
        backgroundColor: theme.colors.vranaRed,
        borderRadius: 10,
        opacity: .75,
        color: theme.colors.nonTextWhite,
        marginTop: 10
    }
}));

const MainDrawer = ({ open, handleDrawerClose, handleTitle }) => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawerStyle}
            anchor='left'
            open={open}
            classes={{
                paper: classes.drawerPaperStyle
            }}
            variant='temporary'
            onClose={handleDrawerClose}
        >
            <div className={classes.drawerHeaderStyle}>
                <List>
                    {Object.keys(ROUTES_OBJECT).map((key, index) => {
                        return (
                            <ListItem 
                                button 
                                key={index}
                                component={Link}
                                to={key}
                                onClick={() => handleTitle(ROUTES_OBJECT[key])}
                            >
                                <ListItemText primary={ROUTES_OBJECT[key]} />
                            </ListItem>
                        );
                    })}
                </List>
                <Divider />
                <IconButton
                    onClick={handleDrawerClose}
                    className={classes.backButtonStyle}
                >
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </Drawer>
    );
};

export default MainDrawer;