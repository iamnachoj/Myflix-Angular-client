import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//simplified API for Angular applications that makes it possible for the client app to communicate with the API or server-side:
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Adding here HttpClientModule, we can now use the Angular HttpClient module in the application.
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
