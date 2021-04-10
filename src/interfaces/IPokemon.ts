import ISpecie from './ISpecie'
import ISprite from './ISprite'

export default interface IPokemon {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  location_area_encounters: string
  abilities: string[]
  forms: string[]
  game_indices: string[]
  held_items: []
  moves: string[]
  species: ISpecie
  sprites: ISprite
  stats: []
  types: []
}
