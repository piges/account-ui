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

	ngOnInit(): void {
		this.loginFormGroup = this._formBuilder.group({
			email: [null, [Validators.email, Validators.required]],
		});
	}


	async loginSubmit() {
		if (!this.loginFormGroup.valid) {
			return;
		}

		let identity;
		try {
			identity = await this.pigesAuthService.getIdentityProvider(this.loginFormGroup.value.email);
		} catch (e) {
			console.log(e);
		}

		console.log(identity);
	}


}