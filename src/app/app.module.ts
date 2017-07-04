import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PageNotFoundModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
