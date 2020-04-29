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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const MainDrawer = ({ open, handleDrawerClose }) => {
    const classes = useStyles();
    const authed = useSelector(state => state.admins.authed);
    const dispatch = useDispatch();

    const [sections, setSections] = useState({
        Admins: false,
        Projects: false,
        News: false, 
        Equipment: false,
        Careers: false 
    });

    const toggleSection = name => {
        setSections({ ...sections, [name]: !sections[name] });
    };
    
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
                                {routeObject.Icon ? <ListItemIcon style={{ color: 'white' }}><routeObject.Icon /></ListItemIcon> : null}
                                <ListItemText primary={routeObject.title} />
                            </ListItem>
                        );
                    })}
                    {authed
                    ?
                    <Fragment>
                        <Divider className={classes.dividerStyle} />
                        <ListSubheader 
                            onClick={() => toggleSection('Admins')} 
                            className={classes.listSubheaderMasterStyle}
                        >
                            Admin
                        </ListSubheader>
                        <Collapse in={sections['Admins']}>
                            {AUTHED_ROUTES_ARRAY.map((routeSection, index) => {
                                return (
                                    <Fragment key={index}>
                                        <ListSubheader 
                                            key={index}
                                            onClick={() => toggleSection(routeSection.title)}
                                            className={classes.listSubheaderStyle}
                                        >
                                            {routeSection.title}
                                        </ListSubheader>
                                        <Collapse in={sections[routeSection.title]}>
                                            {routeSection.items.map((routeObject, index) => {
                                                return (
                                                    <ListItem
                                                        button
                                                        key={index}
                                                        component={Link}
                                                        to={routeObject.link}
                                                        onClick={() => handleDrawerClose()}
                                                    >
                                                        {routeObject.Icon ? <ListItemIcon style={{ color: 'white' }}><routeObject.Icon /></ListItemIcon> : null}
                                                        <ListItemText primary={routeObject.title} />
                                                    </ListItem>
                                                ); 
                                            })}
                                        </Collapse>
                                    </Fragment>
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
                        <ListItemIcon style={{ color: 'white' }}><ExitToAppIcon /></ListItemIcon>
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