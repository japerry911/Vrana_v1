import React, { useState, useEffect } from 'react';
import { useStyles } from './AddProjectStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Footer from '../../components/Footer/Footer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import FormTextField from '../../components/FormTextField/FormTextField';
import FormTextareaAutosize from '../../components/FormTextareaAutosize/FormTextareaAutosize';
import FormImageUploader from '../../components/FormImageUploader/FormImageUploader';
import { useDispatch, useSelector } from 'react-redux';
import { createProject } from '../../redux/actions/projectsActions';
import Spinner from '../../components/Spinner/Spinner';

const AddProject = ({ history }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const token = useSelector(state => state.admins.token);
    const isLoading = useSelector(state => state.projects.loading);

    const [clientName, setClientName] = useState('');
    const [size, setSize] = useState('');
    const [location, setLocation] = useState('');
    const [yearCompletedProjectStatus, setYearCompletedProjectStatus] = useState('');
    const [constructionValue, setConstructionValue] = useState('');
    const [scopeOfWork, setScopeOfWork] = useState('');
    const [industry, setIndustry] = useState('');
    const [firstParagraphHeader, setFirstParagraphHeader] = useState('');
    const [firstParagraphContent, setFirstParagraphContent] = useState('');
    const [keyProjectBullets, setKeyProjectBullets] = useState('');
    const [cardPicture, setCardPicture] = useState('');
    const [detailPictureTop, setDetailPictureTop] = useState('');
    const [detailPictureBottom, setDetailPictureBottom] = useState('');
    const [validationStatus, setValidationStatus] = useState(false);

    useEffect(() => {
        if (clientName  && size  && location  && yearCompletedProjectStatus  && constructionValue  && 
            scopeOfWork  && industry  && firstParagraphHeader  && firstParagraphContent  && keyProjectBullets  && 
            cardPicture  && detailPictureTop  && detailPictureBottom ) {
                setValidationStatus(true);
            } else {
                setValidationStatus(false);
            }
    }, [clientName, size, location, yearCompletedProjectStatus, constructionValue, scopeOfWork, industry, firstParagraphHeader, firstParagraphContent, keyProjectBullets,
        cardPicture, detailPictureTop, detailPictureBottom]);

    const handleSubmit = async event => {
        event.preventDefault();

        const projectObject = {
            Client_Name: clientName,
            Size: size,
            Location: location,
            YearCompleted_ProjectStatus: yearCompletedProjectStatus,
            Construction_Value: constructionValue,
            Scope_Of_Work: scopeOfWork,
            Industry: industry,
            First_P_Header: firstParagraphHeader,
            First_P_Content: firstParagraphContent,
            Key_Projects_Bullets: keyProjectBullets,
        };

        const formData = new FormData();
        
        formData.append('images_file_client_name', clientName.replace(/ /g, '_').toString().toLowerCase());

        formData.append('card_image_filetype', cardPicture.type.replace('image/', ''));
        formData.append('card_image', cardPicture);

        formData.append('template_image1_filetype', detailPictureTop.type.replace('image/', ''));
        formData.append('template_image1', detailPictureTop);

        formData.append('template_image2_filetype', detailPictureBottom.type.replace('image/', ''));
        formData.append('template_image2', detailPictureBottom);
        
        Object.keys(projectObject).forEach(key => {
            if (key === 'Key_Projects_Bullets') {
                formData.append(key, keyProjectBullets.replace(/- /g, '').replace(/-/g, '').split('\n').join('|||'));
            } else {
                formData.append(key, projectObject[key]);
            }
        });

        await dispatch(createProject(formData, token));

        setClientName('');
        setSize('');
        setLocation('');
        setYearCompletedProjectStatus('');
        setConstructionValue('');
        setScopeOfWork('');
        setIndustry('');
        setFirstParagraphHeader('');
        setFirstParagraphContent('');
        setKeyProjectBullets('');
        setCardPicture('');
        setDetailPictureTop('');
        setDetailPictureBottom('');

        history.push('/admin/add-project');
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
                <HeroHeader headerText='Admin: Add Project' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form onSubmit={handleSubmit} className={classes.formContainerStyle}>
                        <Grid container spacing={0} className={classes.whiteContainerStyle}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                                <Typography variant='h4' className={classes.headerFontStyle}>
                                    Add Project
                                </Typography>
                                <Divider />
                            </Grid>
                            <FormTextField 
                                label='Client Name' 
                                value={clientName}
                                onChange={newClientName => setClientName(newClientName.target.value)}
                            />
                            <FormTextField 
                                label='Size' 
                                value={size}
                                onChange={newSize => setSize(newSize.target.value)}
                            />
                            <FormTextField 
                                label='Location' 
                                value={location}
                                onChange={newLocation => setLocation(newLocation.target.value)}
                            />
                            <FormTextField 
                                label='Year Completed / Project Status' 
                                value={yearCompletedProjectStatus}
                                onChange={newYearCompletedProjectStatus => setYearCompletedProjectStatus(newYearCompletedProjectStatus.target.value)}
                            />
                            <FormTextField 
                                label='Construction Value' 
                                value={constructionValue}
                                onChange={newConstructionValue => setConstructionValue(newConstructionValue.target.value)}
                            />
                            <FormTextField 
                                label='Scope of Work' 
                                value={scopeOfWork}
                                onChange={newScopeOfWork => setScopeOfWork(newScopeOfWork.target.value)}
                            />
                            <FormTextField 
                                label='Industry' 
                                value={industry}
                                onChange={newIndustry => setIndustry(newIndustry.target.value)}
                            />
                            <FormTextField 
                                label='First Paragraph Header' 
                                value={firstParagraphHeader}
                                onChange={newFirstParagraphHeader => setFirstParagraphHeader(newFirstParagraphHeader.target.value)}
                            />
                            <FormTextareaAutosize 
                                labelText='First Paragraph Content' 
                                value={firstParagraphContent}
                                onChange={newFirstParagraphContent => setFirstParagraphContent(newFirstParagraphContent.target.value)}
                            />
                            <FormTextareaAutosize 
                                labelText='Key Project Bullets' 
                                value={keyProjectBullets}
                                onChange={newKeyProjectBullets => setKeyProjectBullets(newKeyProjectBullets.target.value)}
                            />
                            <FormImageUploader
                                onChange={picture => setCardPicture(picture.target.files[0])}
                                value={cardPicture}
                                labelText='Upload Card Picture'
                            />
                            <FormImageUploader
                                onChange={picture => setDetailPictureTop(picture.target.files[0])}
                                value={detailPictureTop}
                                labelText='Upload Detail Picture Top'
                            />
                            <FormImageUploader
                                onChange={picture => setDetailPictureBottom(picture.target.files[0])}
                                value={detailPictureBottom}
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

export default AddProject;