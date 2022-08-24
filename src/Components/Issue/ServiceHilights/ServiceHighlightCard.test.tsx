import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import ServiceHilightsCard from './ServiceHilightsCard'


interface Data {
    title: string
    text: string
    image: string
}
const data: Data = {
    title: "",
    text: "",
    image: ""
}

test('service highlight card', () => {
    render(<ServiceHilightsCard item={data} />)
})
describe('service highlight card rendering specification', () => {
    it('SnapShot testing', () => {
        const component = renderer.create(<ServiceHilightsCard item={data} />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('render without crashing service highlight card', () => {
        const div = document.createElement('div')
        render(<ServiceHilightsCard item={data} />)
        ReactDOM.unmountComponentAtNode(div)
    })
})
