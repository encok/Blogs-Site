import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechblogsComponent } from './techblogs/techblogs.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
 {path:'', component:TopheadingComponent}, //home
 {path:'tech', component:TechblogsComponent}, //tech
 {path:'about', component:AboutComponent}, //about

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
