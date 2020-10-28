import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CtscanComponent } from './ctscan/ctscan.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'images', component:CtscanComponent},
  {path: "", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
