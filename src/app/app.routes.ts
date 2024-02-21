import { CanMatchFn, Route, Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { inject } from '@angular/core';
import { AuthenticationService } from './services/auth/authentication.service';
import { loginGuard } from './helpers/guard/login.guard';
import { homeGuard } from './helpers/guard/home.guard';

export const routes: Routes = [
   
    { 
        path: '', 
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
        children: [
            {
                path: 'dashboard',
                title: 'Dashboard',
                loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
                canMatch: [homeGuard], 
            },
            {
                path: 'resultat-finale',
                loadComponent: () => import('./pages/resultat-final/resultat-final.component').then(c => c.ResultatFinalComponent),

            },
            {
                path: 'create-pilote',
                loadComponent: () => import('./pages/create-pilote/create-pilote.component').then(c => c.CreatePiloteComponent),
                canMatch: [homeGuard], 

            },
            {
                path: 'resultat-lap',
                loadChildren: () => import('./pages/resultat-lap/routes').then(c => c.routes),
            },
            {
                path: 'real-time',
                loadComponent: () => import('./pages/real-time/real-time.component').then(c => c.RealTimeComponent),
            },
            {
                path: 'resultat-speciale',
                loadChildren: () => import('./pages/resultat-special/routes').then(c => c.routes),
            }
        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent),
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)
    }
];
