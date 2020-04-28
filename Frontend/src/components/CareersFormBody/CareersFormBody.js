import React, { Fragment } from 'react';
import FormTextField from '../FormTextField/FormTextField';
import Grid from '@material-ui/core/Grid';

const CareersFormBody = (fields, setField) => {
    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField 
                    paddingTop='1em'
                    label='Title' 
                    value={fields.title}
                    onChange={setField}
                    id='title'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormTextField
                    label='Department' 
                    value={fields.department}
                    onChange={setField}
                    id='department'
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
                    label='Job Url' 
                    value={fields.jobUrl}
                    onChange={setField}
                    id='jobUrl'
                />
            </Grid>
        </Fragment>
    );
};

export default CareersFormBody;