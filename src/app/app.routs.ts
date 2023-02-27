import { Routes } from '@angular/router';
import { HomePageComponent } from './core/layouts/home-page/home-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
];
