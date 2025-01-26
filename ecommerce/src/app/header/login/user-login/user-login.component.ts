import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/header/login/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  userLoginForm!: FormGroup;
  isCorrectUserDetails: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public loginService: LoginService
  ) {
    this.userLoginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
  }


  onSubmitLoginForm() {
    console.log('user details: ', this.userLoginForm.value);
    const userDetails = JSON.parse(localStorage.getItem('userDetails')!);
    console.log('user Details: ', userDetails);
    if (this.userLoginForm.value.email === userDetails.email && this.userLoginForm.value.password === userDetails.password) {
      this.isCorrectUserDetails = !this.isCorrectUserDetails;
      this.loginService.userName.next(userDetails.firstname);
      this.router.navigateByUrl('products');
    } else {
      this.isCorrectUserDetails = !this.isCorrectUserDetails;
    }
    this.userLoginForm.reset();
  }
}
