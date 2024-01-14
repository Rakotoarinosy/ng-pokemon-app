import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: 'pokemons', loadChildren: () => import('./pokemon/pokemon.module').then(module => module.PokemonModule)},
  {path: '**', component: PageNotFoundComponent },
];
