import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import DateCard from './DateCart'

interface IDateCardProps {
  date: string[]
  setActiveDate: React.Dispatch<React.SetStateAction<string[]>>
}
const data: React.FunctionComponent<IDateCardProps> = ({ date, setActiveDate }) => {
  setActiveDate(date)
}

test('date card', () => {
  render(<DateCard />)
})
describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<DateCard />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<DateCard />)
    ReactDOM.unmountComponentAtNode(div)
  })
})
