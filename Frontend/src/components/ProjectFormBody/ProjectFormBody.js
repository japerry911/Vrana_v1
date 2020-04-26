import React, { Fragment } from 'react';
import FormTextField from '../FormTextField/FormTextField';
import FormTextareaAutosize from '../FormTextareaAutosize/FormTextareaAutosize';
import FormImageUploader from '../FormImageUploader/FormImageUploader';
import Grid from '@material-ui/core/Grid';

const ProjectFormBody = ({ fields, setField, setImageField }) => {
    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField 
                    paddingTop='1em'
                    label='Client Name' 
                    value={fields.clientName}
                    onChange={setField}
                    id='clientName'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <FormTextField 
                label='Size' 
                value={fields.size}
                onChange={setField}
                id='size'
            />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField 
                    label='Location' 
                    value={fields.location}
                    onChange={setField}
                    id='location'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField 
                    label='Year Completed / Project Status' 
                    value={fields.yearCompletedProjectStatus}
                    onChange={setField}
                    id='yearCompletedProjectStatus'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField 
                    label='Construction Value' 
                    value={fields.constructionValue}
                    onChange={setField}
                    id='constructionValue'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField 
                    label='Scope of Work' 
                    value={fields.scopeOfWork}
                    onChange={setField}
                    id='scopeOfWork'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField 
                    label='Industry' 
                    value={fields.industry}
                    onChange={setField}
                    id='industry'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField 
                    label='First Paragraph Header' 
                    value={fields.firstParagraphHeader}
                    onChange={setField}
                    id='firstParagraphHeader'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextareaAutosize 
                    labelText='First Paragraph Content' 
                    value={fields.firstParagraphContent}
                    onChange={setField}
                    id='firstParagraphContent'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextareaAutosize 
                    labelText='Key Project Bullets' 
                    value={fields.keyProjectBullets}
                    onChange={setField}
                    id='keyProjectBullets'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormImageUploader
                    onChange={setImageField}
                    emptyField={fields.cardPicture === ''}
                    labelText='Upload Card Picture'
                    id='cardPicture'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormImageUploader
                    onChange={setImageField}
                    emptyField={fields.detailPictureTop === ''}
                    labelText='Upload Detail Picture Top'
                    id='detailPictureTop'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormImageUploader
                    onChange={setImageField}
                    emptyField={fields.detailPictureBottom === ''}
                    labelText='Upload Detail Picture Bottom'
                    id='detailPictureBottom'
                />
            </Grid>
        </Fragment>
    );
};

export default ProjectFormBody;