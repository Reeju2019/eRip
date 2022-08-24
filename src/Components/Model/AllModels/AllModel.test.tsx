import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import AllModels from './AllModels'

test('all model', () => {
    render(<AllModels />)
})
describe('all model rendering specification', () => {
    it('SnapShot testing', () => {
        const component = renderer.create(<AllModels />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('render without crashing all model', () => {
        const div = document.createElement('div')
        render(<AllModels />)
        ReactDOM.unmountComponentAtNode(div)
    })
})
