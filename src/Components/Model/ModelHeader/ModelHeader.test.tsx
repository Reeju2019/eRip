import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import ModelHeader from './ModelHeader'
import { MemoryRouter as Router } from 'react-router-dom'


test('Model header', () => {
    render(<Router><ModelHeader /></Router>)
})
describe('Model header rendering specification', () => {
    it('SnapShot testing', () => {
        const component = renderer.create(<Router><ModelHeader /></Router>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('render without crashing Model header', () => {
        const div = document.createElement('div')
        render(<Router><ModelHeader /></Router>)
        ReactDOM.unmountComponentAtNode(div)
    })
})
