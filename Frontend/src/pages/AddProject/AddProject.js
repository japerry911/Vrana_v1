import React, { useState, useEffect, Fragment } from 'react';
import { useStyles } from './AddProjectStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Grid from '@material-ui/core/Grid';
import Footer from '../../components/Footer/Footer';
import ProjectFormBody from '../../components/ProjectFormBody/ProjectFormBody';
import { useDispatch, useSelector } from 'react-redux';
import { createProject } from '../../redux/actions/projectsActions';
import Spinner from '../../components/Spinner/Spinner';
import { useFormFields } from '../../hooks/customHooks';
import FormButton from '../../components/FormButton/FormButton';
import FormHeader from '../../components/FormHeader/FormHeader';

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

const AddProject = ({ history }) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const token = useSelector(state => state.admins.admin.token);
    const isLoading = useSelector(state => state.projects.loading);

    const [fields, setField, setImageField, setFields] = useFormFields(INITIAL_STATE);
    const [validationStatus, setValidationStatus] = useState(false);

    useEffect(() => {
        if (fields.clientName  && fields.size  && fields.location  && fields.yearCompletedProjectStatus  && fields.constructionValue  && 
            fields.scopeOfWork  && fields.industry  && fields.firstParagraphHeader  && fields.firstParagraphContent  && fields.keyProjectBullets  && 
            fields.cardPicture  && fields.detailPictureTop  && fields.detailPictureBottom ) {
            setValidationStatus(true);
        } else {
            setValidationStatus(false);
        }
    }, [fields]);

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

        formData.append('card_image_filetype', fields.cardPicture.type.replace('image/', ''));
        formData.append('card_image', fields.cardPicture);

        formData.append('template_image1_filetype', fields.detailPictureTop.type.replace('image/', ''));
        formData.append('template_image1', fields.detailPictureTop);

        formData.append('template_image2_filetype', fields.detailPictureBottom.type.replace('image/', ''));
        formData.append('template_image2', fields.detailPictureBottom);
        
        Object.keys(projectObject).forEach(key => {
            if (key === 'Key_Projects_Bullets') {
                formData.append(key, fields.keyProjectBullets.replace(/- /g, '').replace(/-/g, '').split('\n').join('|||'));
            } else {
                formData.append(key, projectObject[key]);
            }
        });

        dispatch(createProject(formData, token));

        setFields(INITIAL_STATE);

        history.push('/admin/add-project');
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
                <HeroHeader headerText='Admin: Add Project' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form onSubmit={handleSubmit} className={classes.formContainerStyle}>
                        <Grid container spacing={0} className={classes.whiteContainerStyle}>
                            <FormHeader headerText='Add Project' />
                            <ProjectFormBody
                                fields={fields}
                                setFields={setField}
                                setImageField={setImageField}
                            />
                            <FormButton
                                buttonText='Create Project'
                                validationStatus={validationStatus}
                            />
                        </Grid>
                    </form>
                </Grid>
                <Footer />
            </Fragment>}
        </div>
    );
};

export default AddProject;