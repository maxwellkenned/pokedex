import { FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import PokedexService from '../../services/PokedexService'

import { config as pokeApiConfig } from '../../config/pokeApi'

import * as S from './styles'
import FadeIn from 'components/FadeIn'

const pokedexService = new PokedexService()

const Pokedex = () => {
  const [data, setData] = useState<Record<string, any>>()
  const inputSearchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const getData = async () => {
      const id = (Math.random() * pokeApiConfig.LASTNORMALPOKEMON) | 0
      const responseApi = await pokedexService.getPokemon({ id })
      setData(responseApi)
    }

    getData()
  }, [])

  const getPokemonApi = useCallback(async id => {
    const responseApi = await pokedexService.getPokemon({ id })

    responseApi && setData(responseApi)
  }, [])

  const handleDecrease = useCallback(async () => {
    const id =
      data?.id === 1
        ? 1
        : data?.id === pokeApiConfig.FISTSPECIALPOKEMON
        ? pokeApiConfig.LASTNORMALPOKEMON
        : data?.id - 1

    await getPokemonApi(id)
  }, [data, getPokemonApi])

  const handleIncrease = useCallback(async () => {
    const id =
      data?.id === pokeApiConfig.LASTNORMALPOKEMON
        ? pokeApiConfig.FISTSPECIALPOKEMON
        : data?.id === pokeApiConfig.LASTPECIALPOKEMON
        ? pokeApiConfig.LASTPECIALPOKEMON
        : data?.id + 1

    await getPokemonApi(id)
  }, [data, getPokemonApi])

  const handleSearch = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      const id = inputSearchRef.current?.value

      if (!id) {
        return
      }

      await getPokemonApi(id)
    },
    [getPokemonApi]
  )

  if (!data) {
    return <div> </div>
  }

  return (
    <S.Wrapper bg={data.species.color.name}>
      <h1>Pokedex</h1>
      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            type="search"
            name="pokemon"
            id="pokemon"
            placeholder="Search for ID or Name"
            ref={inputSearchRef}
          />
        </form>
      </div>
      <section>
        <div className="contentDescription">
          <button onClick={handleDecrease}>{'<'}</button>
          <h2>
            <FadeIn>
              {`#${String(data?.id).padStart(3, '0')}`} - {String(data?.name)}
            </FadeIn>
          </h2>
          <button onClick={handleIncrease}>{'>'}</button>
        </div>
        <div className="image">
          <FadeIn>
            <span>{data.types.join(' and ')} type Pokemon</span>
            <Image
              src={
                (data && data.sprites.other.dream_world.front_default) ||
                data.sprites.front_default
              }
              alt={data?.name}
              width={400}
              height={400}
            />
          </FadeIn>
        </div>
      </section>
    </S.Wrapper>
  )
}

export default Pokedex
