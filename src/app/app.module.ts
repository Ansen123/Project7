import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TudoListComponent } from './tudo-list/tudo-list.component';
const appRoutes:Routes=[
  {
    path:"",component:TudoListComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TudoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
