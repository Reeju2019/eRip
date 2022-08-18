import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import FAQCard from './FAQCard'

interface FAQ {
  question: string
  answer: string
  line: boolean
}
const faq:FAQ = {
  question: "",
  answer: "",
  line: true
}
test('FAQ card', () => {
  render(<FAQCard faq={faq}/>)
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<FAQCard faq={faq}/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<FAQCard faq={faq}/>)
    ReactDOM.unmountComponentAtNode(div)
  })
})
