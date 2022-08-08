import * as React from 'react'
import { useNavigate } from 'react-router-dom'

interface IAllModelsCardProps {
  models: {
    id: string
    model_name: string
    image: string
  }
}

const AllModelsCard: React.FunctionComponent<IAllModelsCardProps> = ({ models }) => {
  const navigate = useNavigate()
  const modelClick = () => {
    localStorage.setItem('modelId', JSON.stringify(models.id))
    const device: string = localStorage.getItem('deviceId') as string
    const brand: string = localStorage.getItem('brandId') as string
    const deviceId = JSON.parse(device)
    const brandId = JSON.parse(brand)
    navigate(`/${deviceId}/${brandId}/${models.id}`)
  }
  return (
    <>
      <div onClick={modelClick} className='modelCard'>
        <div>
          <img src={models.image} className='modelImg' alt={models.model_name} />
        </div>
      </div>
      <p className='modelName'>{models.model_name}</p>
    </>
  )
}

export default AllModelsCard
