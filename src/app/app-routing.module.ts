import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path : '', redirectTo : '/home' , pathMatch : 'full' },
  {
    path : 'home',
    loadChildren : ()=> import('./pages/home/home.module').then( m => m.HomeModule )
  },
  {
    path : 'about',
    loadChildren : ()=> import('./pages/about/about.module').then( m => m.AboutModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
