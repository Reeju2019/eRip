import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import ModelCarousel from './ModelCarousel'


test('Model carousel', () => {
    render(<ModelCarousel />)
})
describe('Model carousel rendering specification', () => {
    it('SnapShot testing', () => {
        const component = renderer.create(<ModelCarousel />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('render without crashing Model carousel', () => {
        const div = document.createElement('div')
        render(<ModelCarousel />)
        ReactDOM.unmountComponentAtNode(div)
    })
})
