import React from 'react'
import BrandPageData from '../../../Data/BrandPage.mock.json'
const NewsAndUpdatesCard: React.FunctionComponent = () => {
  return (
    <>
      <div className='mx-3 pb-3'>
        <div>
          <img src='static/brandPageImage/img-news.png' alt='' />
        </div>
        <h2 className='fs-4 my-2'>{BrandPageData.constData.newsAndUpdate.title}</h2>
        <p className='newsPara text-muted'>{BrandPageData.constData.newsAndUpdate.text}</p>
        <p className='knowmore'>{BrandPageData.constData.newsAndUpdate.knowMore}</p>
      </div>
    </>
  )
}

export default NewsAndUpdatesCard
