import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import AllModelsCard from './AllModelsCard'
import { MemoryRouter as Router } from 'react-router-dom'

interface Data {
    id: string
    modelName: string
    image: string
}
const data: Data = {
    id: "",
    modelName: "",
    image: ""
}
test('all model card', () => {
    render(<Router><AllModelsCard models={data} /></Router>)
})
describe('all model rendering specification', () => {
    it('SnapShot testing', () => {
        const component = renderer.create(<Router><AllModelsCard models={data} /></Router>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('render without crashing all model', () => {
        const div = document.createElement('div')
        render(<Router><AllModelsCard models={data} /></Router>)
        ReactDOM.unmountComponentAtNode(div)
    })
})
