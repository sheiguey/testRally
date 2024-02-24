import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./resultat-final.component').then(c => c.ResultatFinalComponent),
        children: [
            {
                path: 'final-1',
                loadComponent: () => import('./components/final-1/final-1.component').then(c => c.Final1Component),
                outlet: 'final'
            },
            {
                path: 'final-2',
                loadComponent: () => import('./components/final-2/final-2.component').then(c => c.Final2Component),
                outlet: 'final'
            },
        ]
    }
]