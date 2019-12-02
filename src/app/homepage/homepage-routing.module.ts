import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {HomepageComponent} from './homepage.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomepageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
