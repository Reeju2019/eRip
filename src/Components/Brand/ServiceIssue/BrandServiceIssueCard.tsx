import * as React from 'react'
import './ServiceIssue.css'

interface IBrandServiceIssueCardProps {
  data: {
    problem: string
    image: string
  }
}

const BrandServiceIssueCard: React.FunctionComponent<IBrandServiceIssueCardProps> = ({ data }) => {
  return (
    <>
      <div className='d-flex flex-column m-2'>
        <div className='p-2 bg-white '>
          <div className='service-img'>
            <img
              src={data?.image}
              className='images d-flex justify-content-center'
              alt={data?.problem}
            />
          </div>
        </div>
        <p className='service-para'>{data?.problem}</p>
      </div>
    </>
  )
}

export default BrandServiceIssueCard
