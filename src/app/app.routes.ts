import { Routes } from '@angular/router';
import {ProjectsComponent} from './components/projects/projects.component';
import {AboutComponent} from './components/about/about.component';
import {ProjectDetailComponent} from './components/projects/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: '**', redirectTo: '/about' }
];
