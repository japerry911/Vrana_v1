import React, { useState, useEffect, Fragment } from 'react';
import { useStyles } from './EditProjectStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Footer from '../../components/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { useFormFields } from '../../hooks/customHooks';
import { updateProject, getProjects } from '../../redux/actions/projectsActions';
import ProjectFormBody from '../../components/ProjectFormBody/ProjectFormBody';
import FormButton from '../../components/FormButton/FormButton';
import FormHeader from '../../components/FormHeader/FormHeader';
import FormSelect from '../../components/FormSelect/FormSelect';

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

    const [fields, setField, setFields, setImageField] = useFormFields(INITIAL_STATE);
    const [projectToEdit, setProjectToEdit] = useState('');

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.projects.loading);
    const projects = useSelector(state => state.projects.projects);
    const token = useSelector(state => state.admins.admin.token);

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    useEffect(() => {
        if (projectToEdit) {
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

    const handleSubmit = event => {
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

        dispatch(updateProject(projectToEdit.id, formData, token)).then(
            () => dispatch(getProjects())
        );

        setProjectToEdit('');
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
            <Fragment>
                <HeroHeader headerText='Admin: Edit Project' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form onSubmit={handleSubmit} className={classes.formContainerStyle}>
                        <Grid container spacing={0} className={classes.whiteContainerStyle}>
                            <FormHeader headerText='Edit Project' />
                            <FormSelect
                                inputLabelText='Project to Edit'
                                selectValue={projectToEdit}
                                onChangeSelect={newProjectToEdit => setProjectToEdit(newProjectToEdit.target.value)}
                                menuItemFunction={projects.map(project => {
                                                                                return (
                                                                                    <MenuItem 
                                                                                        value={project}
                                                                                        key={project.id}
                                                                                    >
                                                                                        {project.Client_Name}
                                                                                    </MenuItem>
                                                                                );
                                })}
                            />
                            <FormHeader headerText='Project Fields' variant='h6' />
                            <ProjectFormBody
                                fields={fields}
                                setField={setField}
                                setImageField={setImageField}
                            />
                            <FormButton
                                validationStatus={true}
                                buttonText='Update Project'
                            />
                        </Grid>
                    </form>
                </Grid>
                <Footer />
            </Fragment>}
        </div>
    );
};

export default EditProject;