import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import PageNotFound from './PageNotFound'

test('page not found', () => {
  render(<PageNotFound />)
})

describe('pnf rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<PageNotFound />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<PageNotFound />)
    ReactDOM.unmountComponentAtNode(div)
  })
})
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))
