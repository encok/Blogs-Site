import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechblogsComponent } from './techblogs/techblogs.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
//  {path:'', redirectTo:'login', pathMatch:'full'},
//  {path:'login', component:LoginComponent},//login
//  {path:'signup', component:SignupComponent}, //signup 
 {path:'', component:TopheadingComponent}, //home
//  {path:'tech', component:TechblogsComponent}, //tech
 {path:'blogs', component:BlogsComponent}, //blogs
 {path:'about', component:AboutComponent}, //about
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
