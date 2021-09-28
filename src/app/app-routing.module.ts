import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechblogsComponent } from './techblogs/techblogs.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
 {path:'', component:TopheadingComponent}, //home
 {path:'tech', component:TechblogsComponent}, //tech

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
