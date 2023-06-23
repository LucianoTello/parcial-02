import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
import { CocktailsbynameComponent } from './components/cocktailsbyname/cocktailsbyname.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cocktails',
    component : CocktailsComponent
  },
  {
    path: 'cocktailsbyname',
    component : CocktailsbynameComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
