import React from 'react';
import { useStyles } from './ImageBannerSectionStyles';
import Typography from '@material-ui/core/Typography';

const ImageBannerSection = ({ headerText, imageUrl, bodyText }) => {
    const classes = useStyles({ imageUrl });

    return (
        <div className={classes.headerDiv}>
            <Typography variant='h2' className={classes.headerTextStyle}>
                {headerText}
            </Typography>
            <Typography variant='body2' className={classes.whiteText60Style}>
                {bodyText}
            </Typography>
        </div>
    );
};

export default ImageBannerSection;