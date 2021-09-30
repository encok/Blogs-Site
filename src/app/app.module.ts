import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NewsapiservicesService } from './service/newsapiservices.service';
import { TechblogsComponent } from './techblogs/techblogs.component';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostBlogComponent } from './post-blog/post-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechblogsComponent,
    AboutComponent,
    BlogsComponent,
    LoginComponent,
    SignupComponent,
    PostBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    FormsModule

  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
