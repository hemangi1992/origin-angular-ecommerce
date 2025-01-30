import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/header/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLoginName!: string;
  isUserLogin: boolean = false;

  constructor(private router: Router, public loginService: LoginService) {}

  /**
   * Angular Life cycle hook
   */
  ngOnInit(): void {
      this.loginService.userName.subscribe(username => {
        this.userLoginName = username;
        if (this.userLoginName) {
          this.isUserLogin = true;
        }
      })
  }

  /**
   * Function invoke when user login 
   */
  userLogin() {
    this.router.navigateByUrl('user-login');
  }

  /**
   * Function invoke when new user sign
   */
  userSignup() {
    this.router.navigateByUrl('new-user');
  }

  /**
   * Function invoke when user logout
   */
  logout() {
    this.isUserLogin = false;
    this.router.navigateByUrl('');
    localStorage.clear();
  }
}
