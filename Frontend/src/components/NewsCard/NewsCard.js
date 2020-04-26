import React, { Fragment } from 'react';
import { useStyles } from './NewsCardStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const NewsCard = ({ headline, imageUrl, source, date, linkUrl}) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Paper 
                elevation={3} 
                className={classes.paperStyle}
            >
                <img   
                    className={classes.newsImageStyle}
                    alt='News article preview image'
                    src={imageUrl}
                />
                <Typography variant='body1' className={classes.newsArticleTitleStyle}>
                    {headline}
                </Typography>
                <Typography variant='body2' className={classes.articleItalicizeStyle}>
                    {source}
                </Typography>
                <Typography variant='body2' className={classes.articleDateStyle}>
                    {date}
                </Typography>
                <Link href={linkUrl} className={classes.linkStyle} target='_blank'>
                    Read More
                </Link>
            </Paper>
        </Fragment>
    );
};

export default NewsCard;