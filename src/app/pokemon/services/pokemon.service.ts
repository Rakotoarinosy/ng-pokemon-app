import { Injectable } from '@angular/core';
import { Pokemon } from '../entities/pokemon.entity';
import { POKEMONS } from '../mocks/mock-pokemon-list';

// Comment injecte ce sercice come je n'utilise plus un module
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined{
    return POKEMONS.find(pokemon => pokemon.id == pokemonId)
  }

  getPokemonTypeList(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy"
    ];
  }
}
