import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import DateCard from './DateCart'
// import jest from "jest"


const setActiveDate= jest.fn()

const item = ["a","b","c"]
test('date card', () => {
  render(<DateCard date={item} setActiveDate={setActiveDate}/>)
})
describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<DateCard date={item} setActiveDate={setActiveDate}/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<DateCard date={item} setActiveDate={setActiveDate}/>)
    ReactDOM.unmountComponentAtNode(div)
  })
})
