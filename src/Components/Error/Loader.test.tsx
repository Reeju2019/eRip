import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Loader from './Loader'

test('loader', () => {
  render(<Loader />)
})

describe('loader rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<Loader />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<Loader />)
    ReactDOM.unmountComponentAtNode(div)
  })
})