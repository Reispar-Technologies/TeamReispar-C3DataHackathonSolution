import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CtscanComponent } from './ctscan/ctscan.component';

const routes: Routes = [
  {path:'images', component:CtscanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
