import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import NewsSummaryCart from '../Shared/NewsSummary/NewsSummaryCart';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h3>home {allNews.length} </h3>
            {
                allNews.map(news => <NewsSummaryCart key={news._id} news={news}></NewsSummaryCart>)
            }
            <Category></Category>
        </div>
    );
};

export default Home;