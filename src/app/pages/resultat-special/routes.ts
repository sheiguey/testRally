import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./resultat-special.component').then(c => c.ResultatSpecialComponent),
    children: [
      {
        path: 'special-1',
        loadComponent: () => import('./components/special-1/special-1.component').then(c => c.Special1Component),
        outlet: 'special',
    },
    {
        path: 'special-2',
        loadComponent: () => import('./components/special-2/special-2.component').then(c => c.Special2Component),
        outlet: 'special',
      },
   
    ]
  },
];