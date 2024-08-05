import React from 'react'

function NewsArticle({data}) {
  return (
    <div className='news'>
    <h2 className='news_title'>{data.title}</h2>
    <p>{data.urlToImage}</p>
    <p>{data.content}</p>
    <p className='news_desc'>{data.description}</p>
    <span className='news_author'>{data.author}</span>
    <br/>
    <span className='news_pub'>{data.publishedAt}</span>
    <br/>
    <span className='news_source'>{data.source.name}</span>
    </div>
  )
}

export default NewsArticle