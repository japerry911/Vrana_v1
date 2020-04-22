import React from 'react';
import { useStyles } from './FormImageUploaderStyles';
import ImageUploader from 'react-images-upload';
import Grid from '@material-ui/core/Grid';

const FormImageUploader = ({ buttonText, onChange }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
            <ImageUploader
                withIcon={true}
                buttonText={buttonText}
                onChange={onChange}
                imgExtension={['.jpg', '.png']}
                className={classes.imageUploaderStyle}
            />
        </Grid>
    );
};

export default FormImageUploader;