import React from 'react';
import { useStyles } from './ImageBannerSectionStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const ImageBannerSection = ({ headerText, imageUrl, bodyText, flexColumn, buttonText, width, justify, buttonCta }) => {
    const classes = useStyles({ imageUrl, flexColumn, width, justify });

    return (
        <div className={classes.headerDiv}>
            <Typography variant='h2' className={classes.headerTextStyle}>
                {headerText}
            </Typography>
            <Typography variant='body2' className={classes.whiteText60Style}>
                {bodyText}
            </Typography>
            {buttonText ?
            <Button className={classes.greyButtonStyle}>{buttonText}</Button>
            : null}
        </div>
    );
};

export default ImageBannerSection;