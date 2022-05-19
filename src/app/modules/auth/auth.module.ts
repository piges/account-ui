import { NgModule } from '@angular/core';
import { PigesAuthModule, PIGES_CONFIG } from '@piges/auth-angular';
import { PigesAuthLoginComponent, PigesAuthCallbackComponent } from '@piges/auth-angular';
import { RouterModule, Routes } from '@angular/router';
import { IPigesConfig } from '@piges/auth-angular/lib/interface/piges-config';
import { APP_URL } from 'src/app/app.constants';

const pigesConfig: IPigesConfig  = {
	clientId: 'n6jiteokuhd9mlkr2j8f0meg8',
	redirectUrl: APP_URL + '/auth/callback'
}

const pigesAuthRoutes: Routes = [
	{
		path: 'auth',
		children: [
			{
				path: 'login',
				component: PigesAuthLoginComponent,
			},
			{
				path: 'callback',
				component: PigesAuthCallbackComponent
			}
		]
	}
];

@NgModule({
	imports: [ 
		PigesAuthModule,
		RouterModule.forRoot(pigesAuthRoutes)
	],
	providers: [
		{ 
			provide: PIGES_CONFIG,
			useValue: pigesConfig 
		},
	],
})
export class AccountAuthModule {}