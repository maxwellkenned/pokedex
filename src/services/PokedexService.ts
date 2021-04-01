// @ts-ignore: this lib does not have types // https://github.com/PokeAPI/pokedex-promise-v2
import PokedexApi from 'pokedex-promise-v2'
import { NotificationManager } from 'react-notifications'

interface IGetPokemonProps {
  id: number | string
}

interface IPokedexPormise {
  getPokemonByName(id: string | number): Promise<any>
  getPokemonSpeciesByName(id: string | number): Promise<any>
}

export default class PokedexService {
  private pokedex: IPokedexPormise

  constructor() {
    this.pokedex = new PokedexApi()
  }

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
      const pokemon = await this.pokedex.getPokemonByName(id)
      const species = await this.pokedex.getPokemonSpeciesByName(
        pokemon.species.name
      )

      return this._serializer({ ...pokemon, species })
    } catch (err) {
      NotificationManager.error(
        'Please, check your search 🔍.',
        'Pokemon not found 😬'
      )

      return undefined
    }
  }
}
