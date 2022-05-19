import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PigesAuthService } from '@piges/auth-angular';
import { APP_URL } from 'src/app/app.constants';

@Component({
	selector: 'home-page-component',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
	constructor(
		private pigesAuthService: PigesAuthService,
		private router: Router,
	) {}

	userInfo: any = {};

	ngOnInit(): void {
		this.loadUser();
	}

	async loadUser() {
		try {
			this.userInfo = await this.pigesAuthService.getUser();
		} catch(e) {
			this.router.navigateByUrl("/login");
		}
	}

	logout() {
		this.pigesAuthService.logout(APP_URL);
	}
}