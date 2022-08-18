import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'

interface IFAQCardProps {
  faq: {
    question: string
    answer: string
    line: boolean
  }
}

const FAQCard: React.FunctionComponent<IFAQCardProps> = (faq) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='d-flex flex-column m-1'>
        <div className='d-flex flex-row justify-content-between'>
          <h3 className='fs-6'>{faq?.faq?.question}</h3>
          <button
            className='bg-transparent border-0'
            onClick={() => setOpen(!open)}
            aria-controls='example-collapse-text'
            aria-expanded={open}
          >
            {open ? (
              <i className='fa-solid fa-angle-down' />
            ) : (
              <i className='fa-solid fa-angle-up' />
            )}
          </button>
        </div>
        <Collapse in={open}>
          <div id='example-collapse-text' className='paragraph'>
            {faq?.faq?.answer}
          </div>
        </Collapse>
        {faq?.faq?.line && (
          <div className='col-12'>
            <hr className='mt-10' />
          </div>
        )}
      </div>
    </>
  )
}

export default FAQCard
