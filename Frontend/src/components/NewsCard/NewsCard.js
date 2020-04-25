import React, { Fragnent } from 'react';
import { useStyles } from './NewsCardStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const NewsCard = ({ headline, imageUrl, source, date}) => {
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
                    {headline}}
                </Typography>
                <Typography variant='body2' className={classes.articleItalicizeStyle}>
                    {source}}
                </Typography>
                <Typography variant='body2' className={classes.articleDateStyle}>
                    {source}
                </Typography>
            </Paper>
        </Fragment>
    );
};

export default NewsCard;