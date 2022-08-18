import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import BrandServiceIssueCard from './BrandServiceIssueCard'

test('brand service issue card', () => {
  render(<BrandServiceIssueCard />)
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<BrandServiceIssueCard />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<BrandServiceIssueCard />)
    ReactDOM.unmountComponentAtNode(div)
  })
})
