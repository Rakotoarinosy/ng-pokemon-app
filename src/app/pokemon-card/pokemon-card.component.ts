import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [BorderCardDirective, CommonModule, PokemonTypeColorPipe],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() data: Pokemon ;
  @Output() pokemonClick: EventEmitter <Pokemon> = new EventEmitter();
}
