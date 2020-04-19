import React, { Fragment } from 'react';
import { useStyles } from './CardStyles';
import Typography from '@material-ui/core/Typography';

const ServicesCard = ({ ctaText, bodyText, headerText, imageUrl, imageAlt }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <img
                alt={imageAlt}
                src={imageUrl}
                className={classes.snapshotImageStyle}
            />
            <Typography variant='h6' className={classes.medGreyHeaderStyle}>
                {headerText}
            </Typography>
            <div className={classes.cardTextDivStyle}>
                <Typography paragraph variant='body2' className={classes.darkGreyBodyStyle}>
                    {bodyText}
                </Typography>
                <Typography variant='body2' className={classes.redBodyStyle}>
                    {ctaText}
                </Typography>
            </div>
        </Fragment>
    );
};

export default ServicesCard;