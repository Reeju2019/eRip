import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Model from './Model'
import { MemoryRouter as Router } from 'react-router-dom'

test('model', () => {
    render(<Router><Model /></Router>)
})
describe('model rendering specification', () => {
    it('SnapShot testing', () => {
        const component = renderer.create(<Router><Model /></Router>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('render without crashing model', () => {
        const div = document.createElement('div')
        render(<Router><Model /></Router>)
        ReactDOM.unmountComponentAtNode(div)
    })
})
