import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountAuthModule } from './modules/auth/auth.module';
import { PigesAccountModule } from './modules/piges-account/piges-account.module';

@NgModule({
	declarations: [
		AppComponent,

	],
	imports: [
		BrowserModule,
		AppRoutingModule,

		AccountAuthModule,

		PigesAccountModule,

	],
	providers: [

	],
	bootstrap: [
		AppComponent,
	]
})
export class AppModule { }
