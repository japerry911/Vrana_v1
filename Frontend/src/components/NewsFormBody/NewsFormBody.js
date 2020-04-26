import React, { Fragment } from 'react';
import FormTextField from '../FormTextField/FormTextField';
import FormImageUploader from '../FormImageUploader/FormImageUploader';
import Grid from '@material-ui/core/Grid';

const NewsFormBody = ({ fields, setField, setImageField }) => {
    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <FormTextField 
                paddingTop='1em'
                label='Headline' 
                value={fields.headline}
                onChange={setField}
                id='headline'
            />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField
                    label='Source' 
                    value={fields.source}
                    onChange={setField}
                    id='source'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField
                    label='Date Published' 
                    value={fields.datePublished}
                    onChange={setField}
                    id='datePublished'
                    type='date'
                    inputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField
                    label='Article URL' 
                    value={fields.articleLink}
                    onChange={setField}
                    id='articleLink'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormImageUploader
                    onChange={setImageField}
                    emptyField={fields.newsImage === ''}
                    labelText='Upload Article Image'
                    id='newsImage'
                />
            </Grid>
        </Fragment>
    );
};

export default NewsFormBody;