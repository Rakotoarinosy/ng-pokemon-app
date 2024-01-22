import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../entities/pokemon.entity';
import { ActivatedRoute } from '@angular/router';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-edit-pokemon',
    standalone: true,
    templateUrl: './edit-pokemon.component.html',
    styleUrl: './edit-pokemon.component.css',
    imports: [PokemonFormComponent,CommonModule],
    providers: [PokemonService]
})
export class EditPokemonComponent implements OnInit{
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
  }
}
