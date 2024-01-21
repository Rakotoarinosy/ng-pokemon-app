import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POKEMONS } from '../../mocks/mock-pokemon-list';
import { Pokemon } from '../../entities/pokemon.entity';
import { Router } from '@angular/router';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from '../../directives/border-card.directive';
import { PokemonService } from '../../services/pokemon.service';

@Component({
    selector: 'app-list-pokemon',
    standalone: true,
    templateUrl: './list-pokemon.component.html',
    styleUrls: ['./list-pokemon.component.css'],
    imports: [PokemonTypeColorPipe,BorderCardDirective, CommonModule],
    providers : [PokemonService]
})
export class ListPokemonComponent implements OnInit{
  pokemonList: Pokemon[];

  constructor(
    private router:Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
      this.pokemonList = this.pokemonService.getPokemonList();
  }

  goToPokemon(pokemon: Pokemon) {
    console.log('test');
    this.router.navigate(['/pokemons', pokemon.id])
  }
}
