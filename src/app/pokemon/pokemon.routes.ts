import { Routes } from "@angular/router";

export const pokemonRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pokemons',
        loadComponent: () => import('./components/list-pokemon/list-pokemon.component').then(module => module.ListPokemonComponent),
      },
      {
        path: 'pokemons/:id',
        loadComponent: () => import('./components/detail-pokemon/detail-pokemon.component').then(module => module.DetailPokemonComponent),
      }
    ]
  }
];
