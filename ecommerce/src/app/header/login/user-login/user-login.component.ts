import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{

  userLoginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
  this.userLoginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  }

  ngOnInit(): void {  
  }  

  onSubmitLoginForm() {
    console.log('user details: ', this.userLoginForm.value);
    const userDetails = JSON.parse(localStorage.getItem('userDetails')!);
    console.log('user Details: ', userDetails);
    if (this.userLoginForm.value.email === userDetails.email && this.userLoginForm.value.password === userDetails.password) {
      this.router.navigateByUrl('');
    }
    this.userLoginForm.reset();
  }
  
}
