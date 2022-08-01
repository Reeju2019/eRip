import { Container } from 'react-bootstrap'
import AllModelsData from '../../../Data/AllModels.mock.json'
import AllModelsCard from './AllModelsCard'
import './AllModels.css'

const AllModels: React.FunctionComponent = () => {
  return (
    <>
      <section className='allmodels'>
        <Container className='d-flex flex-wrap justify-content-center'>
          {AllModelsData.iPhone.map((item, index) => {
            return (
              <div key={index} className='m-3'>
                <AllModelsCard models={item} />
              </div>
            )
          })}
        </Container>
      </section>
    </>
  )
}

export default AllModels
