import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POKEMONS } from '../../mocks/mock-pokemon-list';
import { Pokemon } from '../../entities/pokemon.entity';
import { Router } from '@angular/router';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from '../../directives/border-card.directive';

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
