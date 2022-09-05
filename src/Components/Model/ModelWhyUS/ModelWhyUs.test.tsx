import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import ModelWhyUs from './ModelWhyUs'

test('model why us', () => {
    render(<ModelWhyUs />)
})
describe('model why us rendering specification', () => {
    it('SnapShot testing', () => {
        const component = renderer.create(<ModelWhyUs />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('render without crashing model why us', () => {
        const div = document.createElement('div')
        render(<ModelWhyUs />)
        ReactDOM.unmountComponentAtNode(div)
    })
})
