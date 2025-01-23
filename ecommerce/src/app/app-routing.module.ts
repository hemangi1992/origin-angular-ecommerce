import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { UserLoginComponent } from 'src/app/header/login/user-login/user-login.component';
import { SignupComponent } from './header/login/signup/signup.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'new-user', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
