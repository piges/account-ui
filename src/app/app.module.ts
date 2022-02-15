import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PigesAccountModule } from './modules/piges-account/piges-account.module';

@NgModule({
  declarations: [
    AppComponent,

	
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	PigesAccountModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
