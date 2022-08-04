import ExtraHeader from '../Extra/ExtraHeader'
import Header from '../Home/Header/Header'
import IssueHeader from './IssueHeader/IssueHeader'
import ProductDetails from './ProductDetails/ProductDetails'

const Issue: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <ExtraHeader/>
      <IssueHeader />
      <ProductDetails/>
    </>
  )
}

export default Issue
