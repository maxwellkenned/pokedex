import { render, screen } from '@testing-library/react'
import Pokedex from '.'

describe('<Pokedex />', () => {
  it('should render the heading', () => {
    render(<Pokedex />)

    expect(
      screen.getByRole('heading', { name: /Pokedex/gi })
    ).toBeInTheDocument()
  })
})
