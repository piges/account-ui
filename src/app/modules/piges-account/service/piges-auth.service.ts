import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';

import { from, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PigesAuthService {

	constructor(
		private http: HttpClient,
		private recaptchaV3Service: ReCaptchaV3Service,
	) { }
  
	private configUrl = 'https://account.piges.io/api/login';

	async getIdentityProvider(email: string) {
		let token = await this.recaptchaV3Service.execute('login').toPromise();
		
		return this.http.post<any>(this.configUrl, {
			email: email,
			"g-recaptcha-response": token
		}).toPromise();
	}
	
}