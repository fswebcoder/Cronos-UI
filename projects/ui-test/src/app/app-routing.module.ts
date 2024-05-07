import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main-component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'installation',
    pathMatch: 'full'
  },
  
  {
    path:'installation',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
