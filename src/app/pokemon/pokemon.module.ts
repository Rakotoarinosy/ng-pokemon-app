import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';


export const pokemonRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListPokemonComponent,
      },
      {
        path: ':id',
        component: DetailPokemonComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
