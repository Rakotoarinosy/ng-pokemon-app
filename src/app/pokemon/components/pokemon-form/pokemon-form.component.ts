import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../entities/pokemon.entity';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from "../../pipes/pokemon-type-color.pipe";

@Component({
    selector: 'app-pokemon-form',
    standalone: true,
    templateUrl: './pokemon-form.component.html',
    styleUrl: './pokemon-form.component.css',
    imports: [CommonModule, FormsModule, PokemonTypeColorPipe]
})
export class PokemonFormComponent implements OnInit{
  @Input() pokemon: Pokemon;
  types: string[];

  constructor(
    private pokemonServices: PokemonService,
    private router: Router
  ) {};

  ngOnInit(): void {
    this.types = this.pokemonServices.getPokemonTypeList();
  }

  hasType(type: string): boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;

    if(isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }
    return true;
  }

  onSubmit() {
    console.log('Submit form!');
    return this.router.navigate(['/pokemon', this.pokemon.id])
  }
}
