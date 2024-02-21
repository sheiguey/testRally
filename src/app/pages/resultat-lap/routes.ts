import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./resultat-lap.component').then(c => c.ResultatLapComponent),
    children: [
      {
        path: 'lap-1',
        loadComponent: () => import('./components/lap1/lap1.component').then(c => c.Lap1Component),
        outlet: 'resultat',
    },
    {
        path: 'lap-2',
        loadComponent: () => import('./components/lap2/lap2.component').then(c => c.Lap2Component),
        outlet: 'resultat',
      },
   
    ]
  },
];