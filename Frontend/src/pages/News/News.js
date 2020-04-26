import React, { useEffect, useState, Fragment } from 'react';
import { useStyles } from './NewsStyles.js';
import { useSelector, useDispatch } from 'react-redux';
import { getNewsArticles } from '../../redux/actions/newsActions';
import TabContentTemplate from '../../misc/TabContent/News/TabContentTemplate';
import Spinner from '../../components/Spinner/Spinner.js';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import HorizontalTabs from '../../components/HorizontalTabs/HoritzontalTabs';

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
                
                tempTabContentArray.push({ tabTitle: currentYearKey.toString(), tabContent: <TabContentTemplate tabContent={tempArrayOfObjectOfArrays[currentYearKey]} /> });
            }

            setTabContentArray(tempTabContentArray);
        }
    }, [newsArticles]);

    return (
        <div className={classes.mainDivStyle}>
            {isLoading
            ?
            <div className={classes.spinnerDivStyle}>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader headerText='News' />
                <HorizontalTabs tabContentArray={tabContentArray} />
            </Fragment>
            }
        </div>
    );
};

export default News;