import React, { useState, useEffect } from 'react';
import { useStyles } from './EditProjectStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Footer from '../../components/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormTextField from '../../components/FormTextField/FormTextField';
import FormTextareaAutosize from '../../components/FormTextareaAutosize/FormTextareaAutosize';
import FormImageUploader from '../../components/FormImageUploader/FormImageUploader';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../redux/actions/projectsActions';
import Spinner from '../../components/Spinner/Spinner';
import { useFormFields } from '../../hooks/customHooks';

const INITIAL_STATE = {
    clientName: '',
    size: '',
    location: '',
    yearCompletedProjectStatus: '',
    constructionValue: '',
    scopeOfWork: '',
    industry: '',
    firstParagraphHeader: '',
    firstParagraphContent: '',
    keyProjectBullets: '',
    cardPicture: '',
    detailPictureTop: '',
    detailPictureBottom: ''
};

const EditProject = () => {
    const classes = useStyles();

    const [fields, setFields, setImageFields] = useFormFields(INITIAL_STATE);
    const [validationStatus, setValidationStatus] = useState(false);
    const [combinedProjectsArray, setCombinedProjectsArray] = useState([]);
    const [projectToEdit, setProjectToEdit] = useState('');

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

        setCombinedProjectsArray(tempProjectsArray);
    }, [projects]);

    return (
        <div className={classes.mainDivStyle}>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <>
                <HeroHeader headerText='Admin: Edit Project' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form className={classes.formContainerStyle}>
                        <Grid container spacing={0} className={classes.whiteContainerStyle}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                                <Typography variant='h4' className={classes.headerFontStyle}>
                                    Edit Project
                                </Typography>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                                <FormControl className={classes.selectProjectStyle}>
                                    <InputLabel>Project to Edit</InputLabel>
                                    <Select
                                        value={projectToEdit}
                                        onChange={newProjectToEdit => setProjectToEdit(newProjectToEdit.target.value)}
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
                                <Typography variant='h6' className={classes.headerFontStyle}>
                                    Project Fields
                                </Typography>
                                <Divider />
                            </Grid>
                            <FormTextField 
                                paddingTop='1em'
                                label='Client Name' 
                                value={fields.clientName}
                                onChange={event => setFields(event)}
                                id='clientName'
                            />
                            <FormTextField 
                                label='Size' 
                                value={fields.size}
                                onChange={setFields}
                                id='size'
                            />
                            <FormTextField 
                                label='Location' 
                                value={fields.location}
                                onChange={setFields}
                                id='location'
                            />
                            <FormTextField 
                                label='Year Completed / Project Status' 
                                value={fields.yearCompletedProjectStatus}
                                onChange={setFields}
                                id='yearCompletedProjectStatus'
                            />
                            <FormTextField 
                                label='Construction Value' 
                                value={fields.constructionValue}
                                onChange={setFields}
                                id='constructionValue'
                            />
                            <FormTextField 
                                label='Scope of Work' 
                                value={fields.scopeOfWork}
                                onChange={setFields}
                                id='scopeOfWork'
                            />
                            <FormTextField 
                                label='Industry' 
                                value={fields.industry}
                                onChange={setFields}
                                id='industry'
                            />
                            <FormTextField 
                                label='First Paragraph Header' 
                                value={fields.firstParagraphHeader}
                                onChange={setFields}
                                id='firstParagraphHeader'
                            />
                            <FormTextareaAutosize 
                                labelText='First Paragraph Content' 
                                value={fields.firstParagraphContent}
                                onChange={setFields}
                                id='firstParagraphContent'
                            />
                            <FormTextareaAutosize 
                                labelText='Key Project Bullets' 
                                value={fields.keyProjectBullets}
                                onChange={setFields}
                                id='keyProjectBullets'
                            />
                            <FormImageUploader
                                onChange={setImageFields}
                                value={fields.cardPicture}
                                labelText='Upload Card Picture'
                            />
                            <FormImageUploader
                                onChange={setImageFields}
                                value={fields.detailPictureTop}
                                labelText='Upload Detail Picture Top'
                            />
                            <FormImageUploader
                                onChange={setImageFields}
                                value={fields.detailPictureBottom}
                                labelText='Upload Detail Picture Bottom'
                            />
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                                <Button 
                                    className={classes.buttonStyle} 
                                    type='submit'
                                    disabled={!validationStatus}
                                >
                                    <Typography variant='h6' className={classes.buttonTextStyle}>
                                        Add Project
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

export default EditProject;