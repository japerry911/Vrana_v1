import React from 'react';
import { useStyles } from './ImageBannerSectionStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const ImageBannerSection = ({ headerText, imageUrl, bodyText, flexColumn, buttonText, width, justify, buttonCta, imageHeight }) => {
    const classes = useStyles({ imageUrl, flexColumn, width, justify, imageHeight });

    return (
        <div className={classes.headerDiv}>
            <Typography variant='h2' className={classes.headerTextStyle}>
                {headerText}
            </Typography>
            {bodyText ?
            <Typography variant='body2' className={classes.whiteText60Style}>
                {bodyText}
            </Typography>
            : null}
            {buttonText ?
            <Button className={classes.greyButtonStyle}>{buttonText}</Button>
            : null}
        </div>
    );
};

export default ImageBannerSection;