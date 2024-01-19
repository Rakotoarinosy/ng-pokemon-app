import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../entities/pokemon.entity';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})
export class PokemonFormComponent implements OnInit{
  @Input() pokemon: Pokemon;
  types: string[];

  constructor(
    private pokemonServices: PokemonService,
    private router: Router,
    private forms : FormsModule
  ) {};

  ngOnInit(): void {
    this.types = this.pokemonServices.getPokemonTypeList();
  }

  hasTypes(type: string): boolean{
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

  onSubmit() {
    console.log('Submit form!');
    return this.router.navigate(['/pokemon', this.pokemon.id])
  }
}
