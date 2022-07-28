import * as React from 'react'
import { useLocation } from 'react-router-dom'
import BrandHeader from './BrandHeader/BrandHeader'

// interface IBrandProps {}
interface LocationState {
  state: {
    id: number
    product: string
  }
}

const Brand: React.FunctionComponent = () => {
  const { state } = useLocation() as LocationState

  return (
    <>
      <h3>Brand of {state.product}</h3>
      <BrandHeader />
    </>
  )
}

export default Brand
