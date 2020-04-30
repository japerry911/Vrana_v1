import React from 'react';
import { useStyles } from './TemplateStyles';
import Grid from '@material-ui/core/Grid';
import CommonHeader from '../../../components/CommonHeader/CommonHeader';
import NewsCard from '../../../components/NewsCard/NewsCard';

const NewsTabContentTemplate = ({ tabContent, year }) => {
    const classes = useStyles();

    return (
        <div className={classes.whiteContainerStyle}>
            <Grid container spacing={0} justify='center'>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  className={classes.gridBottomMarginStyle} align='center'>
                    <CommonHeader
                        headerText='NEWS'
                        subHeaderText={year}
                        headerTextColor='dark'
                        dividerColor='dark'
                    />
                </Grid>
                {tabContent.map(article => {
                    return (
                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={article.id} className={classes.gridBottomMarginStyle} align='center'>
                            <NewsCard 
                                headline={article.Headline}
                                source={article.Source}
                                imageUrl={article.Feature_Image_Url}
                                date={article.Date_Published.toString().substring(0, 10)}
                                linkUrl={article.Article_Link}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default NewsTabContentTemplate;