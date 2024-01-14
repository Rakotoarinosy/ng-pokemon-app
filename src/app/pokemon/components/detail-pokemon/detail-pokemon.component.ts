import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Pokemon } from '../../entities/pokemon.entity';
import { POKEMONS } from '../../mocks/mock-pokemon-list';

@Component({
  selector: 'app-detail-pokemon',
  standalone: false,
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent implements OnInit{

  pokemonList: Pokemon[] = POKEMONS;
  pokemon: Pokemon|undefined;

  @Input() routerlink:string| any[];

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    // const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemonId == pokemonId)

    if (pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }
}
