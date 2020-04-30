import React, { Fragment } from 'react';
import { useStyles } from './CardStyles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const Card = ({ ctaText, bodyText, headerText, imageUrl, imageAlt, headerAlign, linkId, extension }) => {
    const classes = useStyles({ headerAlign });

    return (
        <div className={classes.mainDivStyle}>
            <img
                alt={imageAlt}
                src={imageUrl}
                className={classes.snapshotImageStyle}
            />
            <Typography variant='h6' className={classes.medGreyHeaderStyle}>
                {linkId 
                ?
                <Link className={classes.linkStyle} to={`/${extension}/${linkId}`}>{headerText}</Link>
                :
                headerText}
            </Typography>
            {bodyText || ctaText ?
            <Fragment>
                <Typography paragraph variant='body1' className={classes.darkGreyBodyStyle}>
                    {bodyText}
                </Typography>
                <Typography variant='body1' className={classes.redBodyStyle}>
                    {ctaText}
                </Typography>
            </Fragment>
            : null}
        </div>
    );
};

export default Card;