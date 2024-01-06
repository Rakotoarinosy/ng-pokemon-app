import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../pokemon';
import { BorderCardDirective } from '../border-card.directive';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [BorderCardDirective],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() data: Pokemon ;
  @Output() pokemonClick: EventEmitter <Pokemon> = new EventEmitter();
}
