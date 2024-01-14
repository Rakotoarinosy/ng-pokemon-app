import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { BorderCardDirective } from '../border-card.directive';

@Component({
    selector: 'app-list-pokemon',
    standalone: false,
    templateUrl: './list-pokemon.component.html',
    styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router:Router) {}

  goToPokemon(pokemon: Pokemon) {
    console.log('test');
    this.router.navigate(['/pokemons', pokemon.id])
  }
}
