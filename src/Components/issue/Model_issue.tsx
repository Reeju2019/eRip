import React, { useState } from 'react'
import issueData from '../../Data/Model_issue.json'
import './issue.css'

const Model_issue = () => {
  const breadCrumbData = [
    {
      path: 'home',
      slug: 'Home',
    },
    {
      path: 'mobile',
      slug: 'Mobile',
    },
    {
      path: 'mobile/oneplus',
      slug: 'Oneplus',
    },
    {
      path: 'mobile/oneplus/oneplus3',
      slug: 'Oneplus 3',
    },
  ]

  const [serviceItem, setServiceItem] = useState<number>()
  
//   const details:any =() = issueData.services.find((data :any) => data.id === details.id);
//   let obj = {};
//   let t = details.id;

  const onAdd = (service: any) => {
    if (serviceItem === undefined) {
        setServiceItem(parseInt(service))
    } else {
        setServiceItem(service + serviceItem)
    }
    
    

  }
  console.log(serviceItem);
  
//   const add = () => {
//     {
//       window.localStorage.setServiceItem(
//         t,
//         JSON.stringify({
//           ...obj,
//           t,
//         }),
//       )
//     }

   
//     setServiceItem('remove')
//   }

  return (
    <div>
      <h3>Device Repair Details</h3>

      <div className='row'>
        <div className='col-lg-7 col-sm-12 mob-p-0'>
          <div className='row'>
            <div className='model_details col-12 pt-lg-4 pb-lg-4 pt-3 pb-3 text-mob-center d-flex'>
              <img className='issue_model' src={issueData.image} alt='' />
              <h5>{issueData.device_name}</h5>
            </div>
          </div>
          <h5>Select your Repair Services</h5> <hr />
          <div className='row side-gap-1 model_issue_row'>
            {issueData.services.map((e: any, key: any) => {
              return (
                <div className='d-flex col-6 col-sm-6 g-0' key={e.id}>
                  <img className='issue_icon' src={issueData.image} alt='' />
                  <div className='issue-item-wrap ng-scope service_det'>
                    <h6>{e.service_name}</h6>
                    <span>{e.off}</span>
                    <h6>{e.charge}</h6>
                    <p>{e.des}</p>
                  </div>
                  <button key={e.id} onClick={()=>onAdd(parseInt(e.charge))}>Add+</button>
                </div>
              )
            })}
          </div>
        </div>
        <div className='col-lg-5 col-sm-12 mob-none cus-padding'>
          <h5>Card Preview</h5>
          <hr />
          <h6>You Saved</h6>
          <h6>Total Amount {serviceItem} </h6>
        </div>
      </div>
    </div>
  )
}

export default Model_issue
