import React from 'react';
import { useStyles } from './AddProjectStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Footer from '../../components/Footer/Footer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import FormTextField from '../../components/FormTextField/FormTextField';
import FormTextareaAutosize from '../../components/FormTextareaAutosize/FormTextareaAutosize';

const AddProject = () => {
    const classes = useStyles();

    return (
        <div>
            <HeroHeader headerText='Admin: Add Project' />
            <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center'>
                <Grid container spacing={0} className={classes.whiteContainerStyle}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                        <Typography variant='h4' className={classes.headerFontStyle}>
                            Add Project
                        </Typography>
                        <Divider />
                    </Grid>
                    <FormTextField label='Client Name' />
                    <FormTextField label='Size' />
                    <FormTextField label='Location' />
                    <FormTextField label='Year Completed / Project Status' />
                    <FormTextField label='Construction Value' />
                    <FormTextField label='Scope of Work' />
                    <FormTextField label='Industry' />
                    <FormTextField label='First Paragraph Header' />
                    <FormTextareaAutosize labelText='First Paragraph Content' />
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                        <Button 
                            className={classes.buttonStyle} 
                            type='submit'
                        >
                            <Typography variant='h6' className={classes.buttonTextStyle}>
                                Add Project
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default AddProject;