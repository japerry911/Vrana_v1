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

const EditProject = () => {
    const classes = useStyles();

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

export default EditProject;