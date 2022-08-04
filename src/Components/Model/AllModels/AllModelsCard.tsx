import * as React from 'react'

interface IAllModelsCardProps {
  models: { model_name: string; image: string }
}

const AllModelsCard: React.FunctionComponent<IAllModelsCardProps> = (models) => {
  return (
    <>
      <div className='modelCard'>
        <div>
          <img src={models.models.image} className='modelImg' alt={models.models.model_name} />
        </div>
      </div>
      <p className='modelName'>{models.models.model_name}</p>
    </>
  )
}

export default AllModelsCard
