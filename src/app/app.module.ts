import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import {HttpClientModule} from '@angular/common/http';

import { NewsapiservicesService } from './service/newsapiservices.service';
import { TechblogsComponent } from './techblogs/techblogs.component';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechblogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule

  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }