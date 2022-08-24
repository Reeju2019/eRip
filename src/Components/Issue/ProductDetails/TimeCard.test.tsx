import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import TimeCard from './TimeCard'


const setActiveTime = jest.fn()

const time = "a"
test('time card', () => {
    render(<TimeCard time={time} setActiveTime={setActiveTime} />)
})
describe('time card rendering specification', () => {
    it('SnapShot testing', () => {
        const component = renderer.create(<TimeCard time={time} setActiveTime={setActiveTime} />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('render without crashing time card', () => {
        const div = document.createElement('div')
        render(<TimeCard time={time} setActiveTime={setActiveTime} />)
        ReactDOM.unmountComponentAtNode(div)
    })
})
