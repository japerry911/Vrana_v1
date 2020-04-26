import React from 'react';
import { useStyles } from './TemplateStyles';
import Grid from '@material-ui/core/Grid';
import CommonHeader from '../../../components/CommonHeader/CommonHeader';
import NewsCard from '../../../components/NewsCard/NewsCard';

const NewsTabContentTemplate = ({ tabContent, year }) => {
    const classes = useStyles();

    const isEven = tabContent.length % 2 === 0;

    return (
        <div className={classes.whiteContainerStyle}>
            <Grid container spacing={0} justify='center'>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                    <CommonHeader
                        headerText='NEWS'
                        subHeaderText={year}
                        headerTextColor='dark'
                        dividerColor='dark'
                    />
                </Grid>
                {isEven
                ?
                tabContent.map((article, index) => {
                    const cardClass = index % 2 === 0 ? classes.gridLeftItemCardStyle : classes.gridRightItemCardStyle;
                    const alignSide = index % 2 === 0 ? 'right' : 'left';

                    return (
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={cardClass} key={article.id} align={alignSide}>
                            <NewsCard 
                                headline={article.Headline}
                                source={article.Source}
                                imageUrl={article.Feature_Image_Url}
                                date={article.Date_Published.toString().substring(0, 10)}
                                linkUrl={article.Article_Link}
                            />
                        </Grid>
                    );
                })
                :
                tabContent.map((article, index) => {
                    const cardClass = index % 2 === 0 ? classes.gridLeftItemCardStyle : classes.gridRightItemCardStyle;
                    const alignSide = index % 2 === 0 ? 'right' : 'left';
                    
                    if (index === tabContent.length - 1) {
                        return (
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.gridCenterCardStyle} key={article.id} align='center'>
                                <NewsCard 
                                    headline={article.Headline}
                                    source={article.Source}
                                    imageUrl={article.Feature_Image_Url}
                                    date={article.Date_Published.toString().substring(0, 10)}
                                    linkUrl={article.Article_Link}
                                />
                            </Grid>
                        );
                    } else {
                        return (
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={cardClass} key={article.id} align={alignSide}>
                                <NewsCard 
                                    headline={article.Headline}
                                    source={article.Source}
                                    imageUrl={article.Feature_Image_Url}
                                    date={article.Date_Published.toString().substring(0, 10)}
                                    linkUrl={article.Article_Link}
                                />
                            </Grid>
                        );
                    }
                })}
            </Grid>
        </div>
    );
};

export default NewsTabContentTemplate;