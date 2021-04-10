import React, {
  BaseSyntheticEvent,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { NotificationManager } from 'react-notifications'

import { pokeApiConfig } from 'config/pokeApi'
import PokedexService from 'services/PokedexService'
import IPokemon from 'interfaces/IPokemon'
import { useLoading } from './Loading'

interface IPokemonContextData {
  pokemon: IPokemon | undefined
  loading: boolean
  nextPokemon(): Promise<void>
  previousPokemon(): Promise<void>
  getPokemon(id: number | string): Promise<void>
  searchPokemon(e: BaseSyntheticEvent): Promise<void>
}

const PokemonContext = createContext<IPokemonContextData>(
  {} as IPokemonContextData
)
const pokedexService = new PokedexService()

const PokemonProvider: React.FC = ({ children }) => {
  const [pokemon, setPokemon] = useState<IPokemon>()
  const { loading, setLoading } = useLoading()

  const getPokemon = useCallback(
    async id => {
      setLoading(true)
      const data = await pokedexService.getPokemon({ id })
      if (!data) {
        NotificationManager.error(
          'Please, check your search 🔍.',
          'Pokemon not found 😬'
        )
        return
      }

      setPokemon(data)
      setLoading(false)
    },
    [setLoading]
  )

  const searchPokemon = useCallback(
    async (e: BaseSyntheticEvent) => {
      e.preventDefault()
      const form = e.target
      const formData = new FormData(form)
      const id = formData.get('pokemon')

      if (!id) {
        return
      }

      await getPokemon(id)

      form.reset()
    },
    [getPokemon]
  )

  const nextPokemon = useCallback(async () => {
    if (!pokemon?.id) {
      return
    }

    const id =
      pokemon?.id === pokeApiConfig.LASTNORMALPOKEMON
        ? pokeApiConfig.FISTSPECIALPOKEMON
        : pokemon?.id === pokeApiConfig.LASTPECIALPOKEMON
        ? pokeApiConfig.LASTPECIALPOKEMON
        : pokemon?.id + 1

    await getPokemon(id)
  }, [pokemon, getPokemon])

  const previousPokemon = useCallback(async () => {
    if (!pokemon?.id) {
      return
    }

    const id =
      pokemon?.id === 1
        ? 1
        : pokemon?.id === pokeApiConfig.FISTSPECIALPOKEMON
        ? pokeApiConfig.LASTNORMALPOKEMON
        : pokemon?.id - 1

    await getPokemon(id)
  }, [pokemon, getPokemon])

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        loading,
        getPokemon,
        nextPokemon,
        previousPokemon,
        searchPokemon
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

const usePokemon = (): IPokemonContextData => {
  const context = useContext(PokemonContext)

  if (!context) {
    throw new Error('usePokemon must be use within PokemonProvider')
  }

  return context
}

export { usePokemon, PokemonProvider }
