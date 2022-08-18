import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import BrandServiceIssueCard from './BrandServiceIssueCard'


interface Data {
  problem: string
  image: string
}
const data:Data = {
  problem: "",
  image: ""
}

test('brand service issue card', () => {
  render(<BrandServiceIssueCard data={data} />)
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<BrandServiceIssueCard data={data}/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<BrandServiceIssueCard data={data}/>)
    ReactDOM.unmountComponentAtNode(div)
  })
})
