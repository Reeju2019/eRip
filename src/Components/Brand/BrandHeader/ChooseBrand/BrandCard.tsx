import React from 'react'
import './ChooseBrand.css'
import { useNavigate } from 'react-router-dom'
interface IBrandCard {
  brand: {
    brandName: string
    image: string
  }
}

const BrandCard: React.FunctionComponent<IBrandCard> = (brand) => {
  const nevigate = useNavigate()
  let otherCheck = false
  if (brand.brand.brandName === 'others') {
    otherCheck = true
  }
  const device: string = localStorage.getItem('deviceId') as string
  const brandClick = () => {
    localStorage.setItem('brandId', JSON.stringify(brand.brand.brandName))

    const deviceId = JSON.parse(device)
    // console.log(deviceId)

    nevigate(`/${deviceId}/${brand.brand.brandName}`)
  }

  return (
    <>
      <div onClick={brandClick} className={'apple brand-width ' + (otherCheck ? 'other-img' : '')}>
        <img src={brand.brand.image} alt={brand.brand.brandName} className='brand-img' />
      </div>
    </>
  )
}

export default BrandCard
