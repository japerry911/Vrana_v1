import React, { useState, useEffect, Fragment } from 'react';
import { useStyles } from './DeleteProjectStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Grid from '@material-ui/core/Grid';
import Footer from '../../components/Footer/Footer';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects, deleteProject } from '../../redux/actions/projectsActions';
import Spinner from '../../components/Spinner/Spinner';
import FormSelect from '../../components/FormSelect/FormSelect';
import FormButton from '../../components/FormButton/FormButton';
import FormHeader from '../../components/FormHeader/FormHeader';

const DeleteProject = ({ history }) => {
    const classes = useStyles();

    const [projectToDelete, setProjectToDelete] = useState('');

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.projects.loading);
    const projects = useSelector(state => state.projects.projects);
    const token = useSelector(state => state.admins.admin.token);
    

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(deleteProject(projectToDelete, token)).then(
            () => dispatch(getProjects())
        );
        
        setProjectToDelete('');
        history.push('/admin/delete-project');
    };

    return (
        <div className={classes.mainDivStyle}>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader headerText='Admin: Delete Project' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form onSubmit={handleSubmit} className={classes.formContainerStyle}>
                        <Grid container spacing={0} className={classes.whiteContainerStyle}>
                            <FormHeader headerText='Delete Project' />
                            <FormSelect
                                inputLabelText='Project to Delete'
                                selectValue={projectToDelete}
                                onChangeSelect={newProjectToDelete => setProjectToDelete(newProjectToDelete.target.value)}
                                menuItemFunction={projects.map(project => {
                                                                                return (
                                                                                    <MenuItem 
                                                                                        value={project.id}
                                                                                        key={project.id}
                                                                                    >
                                                                                        {project.Client_Name}
                                                                                    </MenuItem>
                                                                                );
                                })} 
                            />
                            <FormButton
                                buttonText='Delete Project'
                                validationStatus={projectToDelete}
                            />
                        </Grid>
                    </form>
                </Grid>
                <Footer />
            </Fragment>}
        </div>
    );
};

export default DeleteProject;