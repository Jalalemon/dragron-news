import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../Shared/NewsSummary/NewsSummaryCart';

const Category = () => {
    const categoryNews = useLoaderData();
    
    return (
        <div>
          <h2>category:{categoryNews.length} </h2>
          {
            categoryNews.map(news => <NewsSummaryCart key={news._id} news={news} ></NewsSummaryCart>)
          }
        </div>
    );
};

export default Category;