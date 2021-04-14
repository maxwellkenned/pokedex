import { render, screen } from '@testing-library/react'
import { PokemonProvider } from 'hooks/Pokemon'
import Pokedex from '.'

describe('<Pokedex />', () => {
  it('should render the heading', () => {
    render(
      <PokemonProvider>
        <Pokedex />
      </PokemonProvider>
    )

    expect(
      screen.getByRole('heading', { name: /Pokedex/gi })
    ).toBeInTheDocument()
  })
})
