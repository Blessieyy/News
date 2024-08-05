import React, { useContext, useState } from 'react';
import { NewsContext } from './NewsContext'
import NewsArticle from './NewsArticle';



function News(props) {
    const { data, changeCategory } = useContext(NewsContext);
    console.log (data);
   
  


  return  (
  <div>  
    <div className='news_container'>
      
      <div className='news_content'>
      <h1 className='head_text'>News Headlines App 📰</h1>
  <div className='all_news'>
  {data.length > 0 ? (
    data.map((news) => (
      <NewsArticle data={news} key={news.url} />
    ))
  ) : (
    "Loading current headlines..."
  )}
</div>
</div>
</div>
</div>
  );

}

export default News