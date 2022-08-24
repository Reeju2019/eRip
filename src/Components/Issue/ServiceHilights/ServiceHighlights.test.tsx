import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import ServiceHilights from './ServiceHilights'


test('service highlights', () => {
    render(<ServiceHilights />)
})
describe('service highlights rendering specification', () => {
    it('SnapShot testing', () => {
        const component = renderer.create(<ServiceHilights />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('render without crashing service highlights', () => {
        const div = document.createElement('div')
        render(<ServiceHilights />)
        ReactDOM.unmountComponentAtNode(div)
    })
})
