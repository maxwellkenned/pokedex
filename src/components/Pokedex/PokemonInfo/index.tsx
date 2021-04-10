import React from 'react'

import FadeIn from 'components/FadeIn'
import Image from 'next/image'
import { usePokemon } from 'hooks/Pokemon'

const PokemonInfo: React.FC = () => {
  const { pokemon, nextPokemon, previousPokemon } = usePokemon()

  return React.useMemo(
    () => (
      <section>
        <div className="contentDescription">
          <button onClick={previousPokemon}>{'<'}</button>
          <h2>
            <FadeIn>
              {pokemon?.id
                ? `#${String(pokemon?.id).padStart(3, '0')} - ${String(
                    pokemon?.name
                  )}`
                : '#000 - Pokemon'}
            </FadeIn>
          </h2>
          <button onClick={nextPokemon}>{'>'}</button>
        </div>
        <div className="contentImage">
          <FadeIn>
            <span>{pokemon?.types.join(' and ')} type Pokemon</span>
            <Image
              className="image"
              loading="eager"
              src={
                (pokemon && pokemon.sprites.other.dream_world.front_default) ||
                pokemon?.sprites.front_default ||
                '/img/icon-512.png'
              }
              alt={pokemon?.name}
              width={400}
              height={400}
            />
          </FadeIn>
        </div>
      </section>
    ),
    [pokemon, nextPokemon, previousPokemon]
  )
}

export default PokemonInfo
