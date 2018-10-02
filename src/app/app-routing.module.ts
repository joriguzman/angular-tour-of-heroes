import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // For home, redirect to dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }, // :id is a placeholder for specific hero id
  { path: 'heroes', component: HeroesComponent }, // when URL is localhost:4200/heroes, got to HeroesComponent
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)] // Initializes router
})
export class AppRoutingModule { }
