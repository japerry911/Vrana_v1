import React, { Fragment } from 'react'
import { useStyles } from './CommonHeaderStyles';
import Typography from '@material-ui/core/Typography';

const CommonHeader = ({ headerText, subHeaderText, dividerColor, headerTextColor, align }) => {
    const classes = useStyles({ headerTextColor, align });

    const dividerUrl = dividerColor === 'dark' 
        ? 
        'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image.png'
        : dividerColor === 'light' 
        ?
        'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(1).png'
        :
        'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Line+Icon+Gray.png';

    return (
        <Fragment>
            {subHeaderText 
            ?
            <Typography variant='body1' className={classes.redSubtitleTextStyle}>
                {subHeaderText}
            </Typography>
            :
            null}
            <Typography variant='h3' className={classes.greyTitleTextStyle}>
                {headerText}
            </Typography>
            <img
                alt='Divider Lines'
                src={dividerUrl}
            />
        </Fragment>
    );
};

export default CommonHeader;