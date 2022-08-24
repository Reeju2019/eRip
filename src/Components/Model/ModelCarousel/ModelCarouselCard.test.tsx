import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import ModelCarouselCard from './ModelCarouselCard'

interface Data {
    model: string
    image: string
}
const data: Data = {
    model: "",
    image: ""
}
test('Model carousel', () => {
    render(<ModelCarouselCard data={data} />)
})
describe('Model carousel rendering specification', () => {
    it('SnapShot testing', () => {
        const component = renderer.create(<ModelCarouselCard data={data} />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('render without crashing Model carousel', () => {
        const div = document.createElement('div')
        render(<ModelCarouselCard data={data} />)
        ReactDOM.unmountComponentAtNode(div)
    })
})
