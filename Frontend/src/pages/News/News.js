import React, { useEffect, useState, Fragment } from 'react';
import { useStyles } from './NewsStyles.js';
import { useSelector, useDispatch } from 'react-redux';
import { getNewsArticles } from '../../redux/actions/newsActions';
import NewsTabContentTemplate from '../../misc/TabContent/News/NewsTabContentTemplate';
import Spinner from '../../components/Spinner/Spinner.js';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import HorizontalTabs from '../../components/HorizontalTabs/HoritzontalTabs';
import Footer from '../../components/Footer/Footer';

const News = () => {
    const classes = useStyles();

    const [tabContentArray, setTabContentArray] = useState([]);

    const isLoading = useSelector(state => state.news.loading);
    const newsArticles = useSelector(state => state.news.newsArticles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewsArticles());
    }, [dispatch]);

    useEffect(() => {
        if (newsArticles.length > 0) {
            const tempArrayOfObjectOfArrays = {};
            for (let i = 0; i < newsArticles.length; i++) {
                if (tempArrayOfObjectOfArrays[new Date(newsArticles[i].Date_Published).getFullYear()]) {
                    tempArrayOfObjectOfArrays[new Date(newsArticles[i].Date_Published).getFullYear()].push(newsArticles[i]);
                } else {
                    tempArrayOfObjectOfArrays[new Date(newsArticles[i].Date_Published).getFullYear()] = [newsArticles[i]];
                }
            }

            const tempTabContentArray = [];

            for (let i = 0; i < Object.keys(tempArrayOfObjectOfArrays).length; i++) {
                const currentYearKey = Object.keys(tempArrayOfObjectOfArrays)[i];
                
                tempTabContentArray.push({ tabTitle: currentYearKey.toString(), tabContent: <NewsTabContentTemplate 
                                                                                                tabContent={tempArrayOfObjectOfArrays[currentYearKey]}
                                                                                                year={currentYearKey}
                                                                                            /> });
            }

            setTabContentArray(tempTabContentArray);
        }
    }, [newsArticles]);

    return (
        <div className={classes.mainDivStyle}>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader headerText='News' />
                <HorizontalTabs tabContentArray={tabContentArray} />
                <Footer />
            </Fragment>
            }
        </div>
    );
};

export default News;