import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PigesAccountAuthService } from '../../service/piges-account-auth.service';

@Component({
	selector: 'login-component',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	constructor(
		private _formBuilder: FormBuilder,
		private pigesAccountAuthService: PigesAccountAuthService,
		@Inject(DOCUMENT) private document: Document
	) { }

	loginFormGroup!: FormGroup;
	boxToShow: number = 1;
	identities: any[] = [];
	error: any;
	

	ngOnInit(): void {
		this.loginFormGroup = this._formBuilder.group({
			email: [null, [Validators.email, Validators.required]],
		});
	}


	async loginSubmit() {
		if (!this.loginFormGroup.valid) {
			return;
		}

		try {
			let response: any[];
			response = await this.pigesAccountAuthService.getIdentityProvider(this.loginFormGroup.value.email);
			
			if(response.length == 0) {
				throw "Errore anomalo!"
			}

			if(response.length < 2) {
				this.document.location.href = response[0].authorizeUrl;
				return;
			}

			this.identities = response;
			this.boxToShow = 2;
		} catch (e: any) {
			this.error = e.error;
			this.boxToShow = -1;
		}

	}

	redirectToAuthorizationUrl(identifier: any) {
		this.document.location.href = identifier.authorizeUrl;
	}

}