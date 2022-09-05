import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import ModelRouter from './RoutingModule'
import { MemoryRouter as Router } from 'react-router-dom'


test('routing module', () => {
  render(<Router><ModelRouter /></Router>)
})
describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<Router><ModelRouter /></Router>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<Router><ModelRouter /></Router>)
    ReactDOM.unmountComponentAtNode(div)
  })
})
