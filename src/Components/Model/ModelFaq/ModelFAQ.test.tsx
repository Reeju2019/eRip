import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import ModelFaq from './ModelFaq'


test('Model FAQ', () => {
    render(<ModelFaq />)
})
describe('Model FAQ rendering specification', () => {
    it('SnapShot testing', () => {
        const component = renderer.create(<ModelFaq />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('render without crashing Model FAQ', () => {
        const div = document.createElement('div')
        render(<ModelFaq />)
        ReactDOM.unmountComponentAtNode(div)
    })
})
