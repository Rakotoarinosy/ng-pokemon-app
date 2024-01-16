import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {path: '', loadChildren: () => import('./pokemon/pokemon.routes').then(module => module.pokemonRoutes)},
  {path: '**', component: PageNotFoundComponent },
];
