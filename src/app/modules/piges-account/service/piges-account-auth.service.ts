import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { APP_URL } from 'src/app/app.constants';


@Injectable({
	providedIn: 'root',
})
export class PigesAccountAuthService {

	constructor(
		private http: HttpClient,
		private recaptchaV3Service: ReCaptchaV3Service,
		private route: ActivatedRoute,
	) { }

	private configUrl = APP_URL + '/api/login';

	async getIdentityProvider(email: string) {
		let token = await this.recaptchaV3Service.execute('login').toPromise();

		let queryParamString = this.getQueryParamString();

		return this.http.post<any>(this.configUrl + "?" + queryParamString, {
			email: email,
			"g-recaptcha-response": token
		}).toPromise();
	}

	getQueryParamString() {
		let queryParamArray: any[] = [];
		Object.keys(this.route.snapshot.queryParams).forEach((key, index) => {
			let value = this.route.snapshot.queryParams[key];
			if(value != "") {
				queryParamArray.push(key + "=" + value);
			}
		});

		return queryParamArray.join("&");
	}

}