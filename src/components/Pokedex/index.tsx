import React, { useCallback, useEffect } from 'react'

import * as S from './styles'
import Head from 'next/head'

import { pokeApiConfig } from 'config/pokeApi'
import Loading from 'components/Loading'
import PokemonInfo from './PokemonInfo'
import { usePokemon } from 'hooks/Pokemon'
import Footer from 'components/Footer'

const Pokedex: React.FC = () => {
  const { pokemon, loading, getPokemon, searchPokemon } = usePokemon()
  const capitalize = useCallback(string => {
    return string && string.charAt(0).toUpperCase() + string.slice(1)
  }, [])

  useEffect(() => {
    const id = (Math.random() * pokeApiConfig.LASTNORMALPOKEMON) | 0
    getPokemon(id)
  }, [getPokemon])

  return React.useMemo(
    () => (
      <>
        <Head>
          <meta
            name="theme-color"
            content={pokemon?.species.color.name || `#ffffff`}
          />
          <title>
            Pokedex |{' '}
            {`#${String(pokemon?.id).padStart(3, '0')} - ${capitalize(
              pokemon?.name
            )}` || 'Maxwell Kenned'}
          </title>
        </Head>
        <S.Wrapper bg={pokemon?.species.color.name || '#ffffff'}>
          <h1>Pokedex</h1>
          <div className="search">
            <form onSubmit={searchPokemon}>
              <input
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
                type="search"
                name="pokemon"
                id="pokemon"
                placeholder="Search for ID or Name"
              />
              {loading && <Loading />}
            </form>
          </div>
          <PokemonInfo />
          <Footer />
        </S.Wrapper>
      </>
    ),
    [capitalize, pokemon, loading, searchPokemon]
  )
}

export default Pokedex
