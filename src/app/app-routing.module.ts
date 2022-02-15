import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/piges-account/component/home-page/home-page.component';
import { LoginComponent } from './modules/piges-account/component/login/login.component';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
