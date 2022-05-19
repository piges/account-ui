import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { PigesAuthModule } from '@piges/auth-angular';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { environment } from 'src/environments/environment';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LoginComponent } from './component/login/login.component';
import { PigesAccountAuthService } from './service/piges-account-auth.service';


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

		PigesAuthModule,

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
		PigesAccountAuthService,
		{
			provide: RECAPTCHA_V3_SITE_KEY,
			useValue: environment.recaptcha.siteKey,
		},
	],
})
export class PigesAccountModule { }