import { render} from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Issue from './Issue'

test('issue', () => {
  render(<Issue />)
})
describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<Issue />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<Issue />)
    ReactDOM.unmountComponentAtNode(div)
  })
})
jest.mock('react-router-dom', () => ({                                                                                                                                                                                                                                   
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))
