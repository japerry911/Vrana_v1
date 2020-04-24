import React, { Fragment } from 'react';
import FormTextField from '../FormTextField/FormTextField';
import FormTextareaAutosize from '../FormTextareaAutosize/FormTextareaAutosize';
import FormImageUploader from '../FormImageUploader/FormImageUploader';

const ProjectFormBody = ({ fields, setField, setImageField }) => {
    return (
        <Fragment>
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
        </Fragment>
    );
};

export default ProjectFormBody;