import React, { Fragment, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { ROUTES_ARRAY, AUTHED_ROUTES_ARRAY } from '../../Router/routesObject';
import { Link } from 'react-router-dom';
import { useStyles } from './MainDrawerStyles';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/adminsActions';
import Collapse from '@material-ui/core/Collapse';

const MainDrawer = ({ open, handleDrawerClose }) => {
    const classes = useStyles();
    const authed = useSelector(state => state.admins.authed);
    const dispatch = useDispatch();

    const [adminSection, setAdminSection] = useState(false);
    
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
                    {ROUTES_ARRAY.map((routeObject, index) => {
                        if (authed && routeObject.title === 'Admin: Login') {
                            return null;
                        }

                        return (
                            <ListItem
                                button
                                key={index}
                                component={Link}
                                to={routeObject.link}
                                onClick={() => handleDrawerClose()}
                            >
                                <ListItemText primary={routeObject.title} />
                                {routeObject.Icon ? <routeObject.Icon /> : null}
                            </ListItem>
                        );
                    })}
                    {authed
                    ?
                    <Fragment>
                        <Divider className={classes.dividerStyle} />
                        <ListSubheader onClick={() => setAdminSection(!adminSection)} className={classes.listSubheaderStyle}>Admin</ListSubheader>
                        <Collapse in={adminSection}>
                            {AUTHED_ROUTES_ARRAY.map((routeObject, index) => {
                                return (
                                    <ListItem
                                        button
                                        key={index}
                                        component={Link}
                                        to={routeObject.link}
                                        onClick={() => handleDrawerClose()}
                                    >
                                        <ListItemText primary={routeObject.title} />
                                        {routeObject.Icon ? <routeObject.Icon /> : null}
                                    </ListItem>
                                );
                            })}
                        </Collapse>
                    </Fragment>
                    :
                    null}
                    {authed
                    ?
                    <ListItem
                        button
                        onClick={() => {
                            dispatch(logOut());
                            handleDrawerClose();
                        }}
                        to={'/'}
                    >
                        <ListItemText primary='Admin: Log Out' />
                    </ListItem>
                    :
                    null
                    }
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