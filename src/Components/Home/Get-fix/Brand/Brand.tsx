import * as React from 'react'
import { useLocation } from 'react-router-dom'

// interface IBrandProps {}
interface LocationState {
  state: {
    id: number
    product: string
  }
}

const Brand: React.FunctionComponent = () => {
  const { state } = useLocation() as LocationState
  console.log(state)

  return (
    <>
      <h3>Brand of {state.product}</h3>
    </>
  )
}

export default Brand
