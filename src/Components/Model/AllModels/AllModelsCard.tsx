import * as React from 'react'

interface IAllModelsCardProps {
  models: { model: string; image: string }
}

const AllModelsCard: React.FunctionComponent<IAllModelsCardProps> = (models) => {
  return (
    <>
      <div className='modelCard'>
        <div>
          <img src={models.models.image} className='modelImg' alt={models.models.model} />
        </div>
      </div>
      <p className='modelName'>{models.models.model}</p>
    </>
  )
}

export default AllModelsCard
