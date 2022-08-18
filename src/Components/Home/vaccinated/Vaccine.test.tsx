import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Vaccinatated from './Vaccinatated'

describe('pnf rendering specification', () => {
  test('vaccinated', () => {
    render(<Vaccinatated />)
  })
  it('SnapShot testing', () => {
    const component = renderer.create(<Vaccinatated />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<Vaccinatated />)
    ReactDOM.unmountComponentAtNode(div)
  })
})
