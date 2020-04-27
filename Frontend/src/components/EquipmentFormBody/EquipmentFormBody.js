import React, { Fragment } from 'react';
import FormTextField from '../FormTextField/FormTextField';
import FormImageUploader from '../FormImageUploader/FormImageUploader';
import FormTextareaAutosize from '../FormTextareaAutosize/FormTextareaAutosize';
import Grid from '@material-ui/core/Grid';

const EquipmentFormBody = ({ fields, setField, setImageField }) => {
    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField 
                    paddingTop='1em'
                    label='Name' 
                    value={fields.name}
                    onChange={setField}
                    id='name'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField 
                    label='Year' 
                    value={fields.year}
                    onChange={setField}
                    id='year'
                    type='number'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField 
                    label='Price' 
                    value={fields.price}
                    onChange={setField}
                    id='price'
                    type='number'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextareaAutosize 
                    labelText='Description' 
                    value={fields.description}
                    onChange={setField}
                    id='description'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormImageUploader
                    onChange={setImageField}
                    emptyField={fields.cardImage === ''}
                    labelText='Upload Card Picture'
                    id='cardImage'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormImageUploader
                    onChange={setImageField}
                    emptyField={fields.leftImage === ''}
                    labelText='Upload Template Image 1'
                    id='leftImage'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormImageUploader
                    onChange={setImageField}
                    emptyField={fields.rightImage === ''}
                    labelText='Upload Template Image 2'
                    id='rightImage'
                />
            </Grid>
        </Fragment>
    );
};

export default EquipmentFormBody;