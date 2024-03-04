import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
