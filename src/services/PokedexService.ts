import { NotificationManager } from 'react-notifications'

import api from '../config/api'
import { config as pokeApiConfig } from '../config/pokeApi'
interface IGetPokemonProps {
  id: number | string
}

interface IPokedexPormise {
  getPokemon(data: IGetPokemonProps): Promise<any>
  getPokemonByName(id: string | number): Promise<any>
  getPokemonSpeciesByName(id: string | number): Promise<any>
}

export default class PokedexService implements IPokedexPormise {
  _serializer(data) {
    const abilities = data.abilities.map(({ ability }) => ability.name)
    const forms = data.forms.map(item => item.name)
    const game_indices = data.game_indices.map(item => item.version.name)
    const moves = data.moves.map(item => item.move.name)
    const types = data.types.map(({ type }) => type.name)
    const stats = data.stats.map(item => ({
      name: item.stat.name,
      stat: item.base_stat
    }))
    const weight = data.weight / 10
    const height = data.height * 10

    const serialized = {
      ...data,
      abilities,
      forms,
      game_indices,
      moves,
      stats,
      types,
      weight,
      height
    }

    return serialized
  }

  public async getPokemon({ id }: IGetPokemonProps) {
    try {
      const idFiltered = pokeApiConfig.INDEXNOTFOUND[id]
      const pokemon = await this.getPokemonByName(idFiltered || id)
      const species = await this.getPokemonSpeciesByName(pokemon.species.name)

      return this._serializer({ ...pokemon, species })
    } catch (err) {
      NotificationManager.error(
        'Please, check your search 🔍.',
        'Pokemon not found 😬'
      )

      return undefined
    }
  }

  public async getPokemonByName(id: string | number) {
    const { data } = await api.get(`pokemon/${id}/`)

    return data
  }

  public async getPokemonSpeciesByName(id: string | number) {
    const { data } = await api.get(`pokemon-species/${id}/`)

    return data
  }
}
