import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { HomePageComponent } from './component/home-page/home-page.component';
import { LoginComponent } from './component/login/login.component';
import { PigesAuthService } from './service/piges-auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		FlexLayoutModule,

		CardModule,
		InputTextModule,
		ButtonModule,
		HttpClientModule,
		RecaptchaV3Module,

	],
	declarations: [
		HomePageComponent,
		LoginComponent,


	],
	exports: [
		HomePageComponent,
		LoginComponent,

	],
	providers: [
		PigesAuthService,
		{
			provide: RECAPTCHA_V3_SITE_KEY,
			useValue: environment.recaptcha.siteKey,
		},
	],
})
export class PigesAccountModule { }