import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Pokemon } from '../../entities/pokemon.entity';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css',
  imports: [CommonModule,PokemonTypeColorPipe]
})
export class DetailPokemonComponent implements OnInit{

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  @Input() routerlink:string| any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
    ) { }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }
}
