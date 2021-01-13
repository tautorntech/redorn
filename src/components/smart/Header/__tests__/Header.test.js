import Header from '..'
import { render, cleanup, screen } from 'unit-test/test-utils'

afterEach(cleanup)

const testId = 'header'

describe('Header', () => {
  it('Should render Header', () => {
    const { getByTestId } = render(<Header />)

    expect(getByTestId(testId)).toBeTruthy()
  })

  test('If contains text in the Header', () => {
    render(<Header />)
    const headerNode = screen.getByText(/Learn RedOrn/i)

    expect(headerNode).toHaveTextContent('Learn RedOrn')
  })
})