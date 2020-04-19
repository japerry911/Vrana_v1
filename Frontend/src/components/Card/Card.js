import React, { Fragment } from 'react';
import { useStyles } from './CardStyles';
import Typography from '@material-ui/core/Typography';

const Card = ({ ctaText, bodyText, headerText, imageUrl, imageAlt, headerAlign }) => {
    const classes = useStyles({ headerAlign });

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
            {bodyText || ctaText ?
            <div className={classes.cardTextDivStyle}>
                <Typography paragraph variant='body2' className={classes.darkGreyBodyStyle}>
                    {bodyText}
                </Typography>
                <Typography variant='body2' className={classes.redBodyStyle}>
                    {ctaText}
                </Typography>
            </div>
            : null}
        </Fragment>
    );
};

export default Card;