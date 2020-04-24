import React, { useState, useEffect } from 'react';
import { useStyles } from './DeleteProjectStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Footer from '../../components/Footer/Footer';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects, deleteProject } from '../../redux/actions/projectsActions';
import Spinner from '../../components/Spinner/Spinner';

const DeleteProject = ({ history }) => {
    const classes = useStyles();

    const [projectToDelete, setProjectToDelete] = useState('');
    const [combinedProjectsArray, setCombinedProductsArray] = useState([]);

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.projects.loading);
    const projects = useSelector(state => state.projects.projects);
    const token = useSelector(state => state.admins.admin.token);
    

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    useEffect(() => {
        const tempProjectsArray = [];

        Object.keys(projects).forEach(industry => {
            projects[industry].forEach(project => {
                tempProjectsArray.push(project);
            });
        });

        setCombinedProductsArray(tempProjectsArray);
    }, [projects]);

    const handleSubmit = async () => {
        await dispatch(deleteProject(projectToDelete, token));
        await dispatch(getProjects());
        
        setProjectToDelete('');
        history.push('/admin/delete-project');
    };

    return (
        <div>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <>
                <HeroHeader headerText='Admin: Delete Project' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form onSubmit={handleSubmit} className={classes.formContainerStyle}>
                        <Grid container spacing={0} className={classes.whiteContainerStyle}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                                <Typography variant='h4' className={classes.headerFontStyle}>
                                    Delete Project
                                </Typography>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                                <FormControl className={classes.selectProjectStyle}>
                                    <InputLabel>Project to Delete</InputLabel>
                                    <Select
                                        value={projectToDelete}
                                        onChange={newProjectToDelete => setProjectToDelete(newProjectToDelete.target.value)}
                                    >
                                        {combinedProjectsArray.map(project => {
                                            return (
                                                <MenuItem 
                                                    value={project.id}
                                                    key={project.id}
                                                >
                                                    {project.Client_Name}
                                                </MenuItem>
                                            );
                                        })}                             
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                                <Button 
                                    className={classes.buttonStyle} 
                                    type='submit'
                                >
                                    <Typography variant='h6' className={classes.buttonTextStyle}>
                                        Delete Project
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Footer />
            </>}
        </div>
    );
};

export default DeleteProject;