import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { APP_URL } from 'src/app/app.constants';


@Injectable({
  providedIn: 'root',
})
export class PigesAccountAuthService {

	constructor(
		private http: HttpClient,
		private recaptchaV3Service: ReCaptchaV3Service,
	) { }
  
	private configUrl = APP_URL + '/api/login';

	async getIdentityProvider(email: string) {
		let token = await this.recaptchaV3Service.execute('login').toPromise();
		
		return this.http.post<any>(this.configUrl, {
			email: email,
			"g-recaptcha-response": token
		}).toPromise();
	}
	
}