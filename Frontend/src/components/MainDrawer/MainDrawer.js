import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { ROUTES_OBJECT } from '../../misc/routesObject';
import { Link } from 'react-router-dom';
import { useStyles } from './MainDrawerStyles';

const MainDrawer = ({ open, handleDrawerClose }) => {
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
                                onClick={() => handleDrawerClose()}
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