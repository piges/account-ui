import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PigesAuthService } from '../../service/piges-auth.service';

@Component({
	selector: 'login-component',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	constructor(
		private _formBuilder: FormBuilder,
		private pigesAuthService: PigesAuthService,
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
			let response;
			response = await this.pigesAuthService.getIdentityProvider(this.loginFormGroup.value.email);
			
			if(response.redirectUrl !== undefined) {
				// fai redirect a response.redirectUrl
				return;
			}

			this.identities = response;
			this.boxToShow = 2;
		} catch (e: any) {
			this.error = e.error;
			this.boxToShow = -1;
			console.log(e);
		}

	}

	redirectToAuthorizationUrl(identifier: string) {
		console.log(identifier);
	}

}