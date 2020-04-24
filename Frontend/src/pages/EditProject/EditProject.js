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
import Spinner from '../../components/Spinner/Spinner';
import { useFormFields } from '../../hooks/customHooks';
import { updateProject, getProjects } from '../../redux/actions/projectsActions';

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

const EditProject = ({ history }) => {
    const classes = useStyles();

    const [fields, setField, setImageField, setFields] = useFormFields(INITIAL_STATE);
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

    useEffect(() => {
        if (projectToEdit) {
            console.log('here');
            const keyProjectBullets = projectToEdit.Key_Projects_Bullets ?
                '-'.concat(projectToEdit.Key_Projects_Bullets.replace(/\n/g, '').replace(/\s+/g, ' ').replace(/\|\|\|/g, '\n-'))
                : '';
            const firstParagraphContent = projectToEdit.First_P_Content ?
                projectToEdit.First_P_Content.replace(/\s+/g, ' ')
                : '';

            setFields({
                clientName: projectToEdit.Client_Name ? projectToEdit.Client_Name : '',
                size: projectToEdit.Size ? projectToEdit.Size : '',
                location: projectToEdit.Location ? projectToEdit.Location : '',
                yearCompletedProjectStatus: projectToEdit.YearCompleted_ProjectStatus ? projectToEdit.YearCompleted_ProjectStatus : '',
                constructionValue: projectToEdit.Construction_Value ? projectToEdit.Construction_Value : '',
                scopeOfWork: projectToEdit.Scope_Of_Work ? projectToEdit.Scope_Of_Work : '',
                industry: projectToEdit.Industry,
                firstParagraphHeader: projectToEdit.First_P_Header ? projectToEdit.First_P_Header : '',
                firstParagraphContent,
                keyProjectBullets,
                cardPicture: '',
                detailPictureTop: '',
                detailPictureBottom: ''
            });
        }
    }, [projectToEdit, setFields]);

    const handleSubmit = async event => {
        event.preventDefault();

        const projectObject = {
            Client_Name: fields.clientName,
            Size: fields.size,
            Location: fields.location,
            YearCompleted_ProjectStatus: fields.yearCompletedProjectStatus,
            Construction_Value: fields.constructionValue,
            Scope_Of_Work: fields.scopeOfWork,
            Industry: fields.industry,
            First_P_Header: fields.firstParagraphHeader,
            First_P_Content: fields.firstParagraphContent,
            Key_Projects_Bullets: fields.keyProjectBullets,
        };

        const formData = new FormData();
        
        formData.append('images_file_client_name', fields.clientName.replace(/ /g, '_').toString().toLowerCase());

        if (fields.cardPicture) {
            formData.append('card_image_filetype', fields.cardPicture.type.replace('image/', ''));
            formData.append('card_image', fields.cardPicture);
        } else {
            formData.append('card_image_filetype', '');
            formData.append('card_image', '');
        }

        if (fields.detailPictureTop) {
            formData.append('template_image1_filetype', fields.detailPictureTop.type.replace('image/', ''));
            formData.append('template_image1', fields.detailPictureTop);
        } else {
            formData.append('template_image1_filetype', '');
            formData.append('template_image1', '');
        }

        if (fields.detailPictureBottom) {
            formData.append('template_image2_filetype', fields.detailPictureBottom.type.replace('image/', ''));
            formData.append('template_image2', fields.detailPictureBottom);
        } else {
            formData.append('template_image2_filetype', '');
            formData.append('template_image2', '');
        }
        
        Object.keys(projectObject).forEach(key => {
            if (key === 'Key_Projects_Bullets') {
                formData.append(key, fields.keyProjectBullets.replace(/- /g, '').replace(/-/g, '').split('\n').join('|||'));
            } else {
                formData.append(key, projectObject[key]);
            }
        });

        setProjectToEdit('');

        await dispatch(updateProject(projectToEdit.id, formData, token));
        await dispatch(getProjects());
        
        setFields(INITIAL_STATE);
        
        history.push('/admin/edit-project');
    };

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
                    <form onSubmit={handleSubmit} className={classes.formContainerStyle}>
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
                                                    value={project}
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
                                onChange={setField}
                                id='clientName'
                            />
                            <FormTextField 
                                label='Size' 
                                value={fields.size}
                                onChange={setField}
                                id='size'
                            />
                            <FormTextField 
                                label='Location' 
                                value={fields.location}
                                onChange={setField}
                                id='location'
                            />
                            <FormTextField 
                                label='Year Completed / Project Status' 
                                value={fields.yearCompletedProjectStatus}
                                onChange={setField}
                                id='yearCompletedProjectStatus'
                            />
                            <FormTextField 
                                label='Construction Value' 
                                value={fields.constructionValue}
                                onChange={setField}
                                id='constructionValue'
                            />
                            <FormTextField 
                                label='Scope of Work' 
                                value={fields.scopeOfWork}
                                onChange={setField}
                                id='scopeOfWork'
                            />
                            <FormTextField 
                                label='Industry' 
                                value={fields.industry}
                                onChange={setField}
                                id='industry'
                            />
                            <FormTextField 
                                label='First Paragraph Header' 
                                value={fields.firstParagraphHeader}
                                onChange={setField}
                                id='firstParagraphHeader'
                            />
                            <FormTextareaAutosize 
                                labelText='First Paragraph Content' 
                                value={fields.firstParagraphContent}
                                onChange={setField}
                                id='firstParagraphContent'
                            />
                            <FormTextareaAutosize 
                                labelText='Key Project Bullets' 
                                value={fields.keyProjectBullets}
                                onChange={setField}
                                id='keyProjectBullets'
                            />
                            <FormImageUploader
                                onChange={setImageField}
                                emptyField={fields.cardPicture === ''}
                                labelText='Upload Card Picture'
                                id='cardPicture'
                            />
                            <FormImageUploader
                                onChange={setImageField}
                                emptyField={fields.detailPictureTop === ''}
                                labelText='Upload Detail Picture Top'
                                id='detailPictureTop'
                            />
                            <FormImageUploader
                                onChange={setImageField}
                                emptyField={fields.detailPictureBottom === ''}
                                labelText='Upload Detail Picture Bottom'
                                id='detailPictureBottom'
                            />
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                                <Button 
                                    className={classes.buttonStyle} 
                                    type='submit'
                                >
                                    <Typography variant='h6' className={classes.buttonTextStyle}>
                                        Update Project
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