import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Offer from './Offer'

test('offer c', () => {
  render(<Offer />)
})

describe('pnf rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<Offer />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<Offer />)
    ReactDOM.unmountComponentAtNode(div)
  })
})
