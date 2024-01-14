import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {path: 'pokemons', loadChildren: () => import('./pokemon/pokemon.module').then(module => module.PokemonModule)},
  {path: '**', component: PageNotFoundComponent },
];
